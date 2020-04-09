import React, { useEffect, useState } from "react";
import { Container, Modal, Provider, Box, Table, Flex, Txt, Input } from "rendition";
import { Button } from "@material-ui/core";
import useAdminModal from "../../../../customHooks/useAdminModal/useAdminModal";
import { sign } from "../../../../services/signatureService";
import hash from "../../../../services/hasherService";
import calculateNonce from "../../../../services/miningService";
import {
  useOnNewNodeAddedSubscription,
  useInsertAdminTransactionsMutation,
  useInsertBlockMutation,
  Bloxx_Address_Constraint,
  Bloxx_Address_Update_Column,
  // useBlockHashByBlocknumberLazyQuery,
  Bloxx_Transaction_Constraint,
  Bloxx_Transaction_Update_Column,
} from "../../../../generated/graphql";
import LoadingIndicator from "../../../util/LoadingIndicator/LoadingIndicator";

const TransferCoinModal = ({ adminInfo }) => {
  const [, setShowAdminModal] = useAdminModal();
  const { data: newNodeSubscriptionData, loading } = useOnNewNodeAddedSubscription();
  const [nodes, setNodes] = useState([]);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [amountToSend, setAmountToSend] = useState(0);
  const [insertAdminTransactionsMutation, { loading: insertAdminTransactionMutationLoading }] = useInsertAdminTransactionsMutation();
  const [insertBlock, { loading: insertBlockLoading }] = useInsertBlockMutation();
  const [isSendCoinsButtonDisabled, setIsSendCoinsButtonDisabled] = useState(false);

  // const [blockHashbyBlockNumberQuery, { data: blockHashQueryData }] = useBlockHashByBlocknumberLazyQuery({ fetchPolicy: "network-only" });

  // useEffect(() => {
  //   blockHashbyBlockNumberQuery({ variables: 0 });
  // }, []);

  useEffect(() => {
    if (newNodeSubscriptionData) {
      let _nodes = [];
      newNodeSubscriptionData.bloxx_node.forEach(node => {
        if (
          node.publicKey !== "undefined" &&
          typeof node.addresses[0] !== "undefined" &&
          node.addresses[0].balance !== null
        ) {
          _nodes.push({
            address: node.addresses[0].id,
            balance: node.addresses[0].balance,
            nodePublicKey: node.addresses[0].nodePublicKey
          });
        }
        if (node.addresses[0].balance > 0) {
          setIsSendCoinsButtonDisabled(true);
        }
      });
      setNodes(_nodes);
    }
  }, [newNodeSubscriptionData]);

  const columns = [
    {
      field: "address",
      label: "Node Address"
    },
    {
      field: "balance",
      label: "Amount",
      sortable: true
    }
  ];

  /**
   * Transfers the intials coins from the admin node to each of the selected user nodes.
   * This will also create or if already exists update a Genesis block. 
   */
  const transferCoins = () => {
    // blockHashbyBlockNumberQuery({ variables: 0 });
    if (selectedNodes.length > 0) {
      const transactions = [];

      selectedNodes.forEach(selectedNode => {
        const signature = sign(
          adminInfo.address.id.concat(":".concat(selectedNode.address.concat(":".concat(amountToSend.toString())))),
          adminInfo.privateKey
        );
        const txHash = hash(
          selectedNode.address.concat(":".concat(amountToSend.toString().concat(":".concat(signature))))
        );
        transactions.push({
          inputAddress: adminInfo.address.id,
          outputAddress: selectedNode.address.id,
          value: amountToSend <= 0 ? 0 : amountToSend,
          signature: signature,
          txHash: txHash,
          address: {
            data: {
              id: selectedNode.address,
              nodePublicKey: nodes.find(node => node.address === selectedNode.address).nodePublicKey,
              balance: amountToSend
            },
            on_conflict: {
              constraint: Bloxx_Address_Constraint.AddressAddressidKey,
              update_columns: [Bloxx_Address_Update_Column.Balance]
            }
          }
        });
      });

      /**
       * 1. Inserts all the coin transfer transactions to the users into the database
       * 2. Prepares a new Genesis Block; adds all the transactions from step 1. into the gensis block information
       * 3. Inserts the Genesis Block into the DB and updates all the transactions' information about their parent block 
       *    (in this case the genesis block)
       */
      try {
        /**
         * Step 1.
         */
        insertAdminTransactionsMutation({
          variables: { transactions }
        })
          /**
           * Step 2. 
           * NOTE: If the Genesis block already exists, then an additional coin transfer to the user nodes will only
           * result in an update of the gensis block. This is done in order to accomodate for users that might join the game late
           * and still need some coins from the admin. In essence, there is always just one genesis block with dynamically updated 
           * transactions 
           *
           */
          .then(res => {
            /**
             * Recursive function to calculate the new Merkel root
             */
            let txHashes = res.data.insert_bloxx_transaction.returning.map(tx => tx.txHash);
            const merkler = (txHashes) => {
              if (txHashes.length === 1) return hash(txHashes[0]);
              let temp = [];
              while (txHashes.length !== 0) {
                if (txHashes.length > 1) {
                  const first = txHashes.pop();
                  const second = txHashes.pop();
                  temp.push(hash(first + second));
                }
                if (txHashes.length === 1) temp.push(hash(txHashes.pop()))
              }
              return merkler(temp);
            }
            const merkel = merkler(txHashes);


            /**
             * Create the Genesis block data
             */
            const blockData = {
              blockNumber: 0,
              previousBlockHash: null,
              blockStatus: "confirmed",
              merkleRoot: merkel,
              timestamp: ((Date.now() / 1000) | 0).toString(),
              difficulty: 1,
              nonce: 0
            };

            /**
             * Calculate the nonce
             */
            const nonce = calculateNonce(blockData);

            const blockHash = hash(
              blockData.blockNumber +
              ":" +
              blockData.previousBlockHash +
              ":" +
              blockData.merkleRoot +
              ":" +
              blockData.timestamp +
              ":" +
              blockData.difficulty +
              ":" +
              nonce);

            /**
             * Prepare the transactions for an update of their parent block hash; This confirms them
             */
            const block_transactions = []
            res.data.insert_bloxx_transaction.returning.forEach(tx => block_transactions.push({
              transaction: {
                data: {
                  blockHash,
                  inputAddress: tx.inputAddress,
                  outputAddress: tx.outputAddress,
                  signature: tx.signature,
                  text: tx.text,
                  txHash: tx.txHash,
                  value: tx.value
                },
                on_conflict: {
                  constraint: Bloxx_Transaction_Constraint.TransactionPkey,
                  update_columns: [Bloxx_Transaction_Update_Column.BlockHash]
                }
              }
            }))

            /**
             * Step 3. Insert/update the Genesis block
             * and the associated transactions
             */
            insertBlock({
              variables: {
                blockHash: blockHash,
                blockNumber: blockData.blockNumber,
                blockStatus: blockData.blockStatus,
                createdAt: blockData.timestamp,
                difficulty: blockData.difficulty,
                merkleRoot: blockData.merkleRoot,
                nonce: nonce,
                previousBlockHash: blockData.previousBlockHash,
                block_transactions: { data: block_transactions }
              }
            }).catch(error => console.log(error));
          })
          .catch(error => {
            console.log(error);
          });
      } catch (error) { console.log(error) }
    }
  };

  return (
    <Modal
      title={"Transfer coins"}
      done={() => {
        setShowAdminModal(false);
      }}
    >
      <Provider>
        <Box m={3}>
          {loading && <LoadingIndicator />}
          {(newNodeSubscriptionData !== undefined || loading) && (
            <>
              <Flex m={3} alignItems={"center"}>
                <Box pr={3}>
                  <Txt>Send:</Txt>
                </Box>
                <Box pr={3}>
                  <Input width={100} type={"number"} min={0} onChange={e => setAmountToSend(parseInt(e.target.value))} />
                </Box>
                <Box pr={3}>
                  <Txt>coins to</Txt>
                </Box>
                <Box pr={3}>
                  <Txt bold>{selectedNodes.length}</Txt>
                </Box>
                <Box pr={3}>
                  <Txt>nodes</Txt>
                </Box>
                <Box pr={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    disabled={isSendCoinsButtonDisabled}
                    onClick={transferCoins}
                    style={{ marginRight: "10px" }}
                  >
                    Send Coins
                  </Button>
                </Box>
              </Flex>
              {isSendCoinsButtonDisabled &&
                <Container m={3}>
                  <Txt color={'red'}>Coins have already been transferred for this game session. Reset the game to send coins again.</Txt>
                </Container>}
              {(insertBlockLoading || insertAdminTransactionMutationLoading) ?
                <LoadingIndicator />
                :
                <Table
                  columns={columns}
                  data={nodes}
                  // use adress for rowKey; because it is unique
                  rowKey="address"
                  onCheck={selectedNodes => setSelectedNodes(selectedNodes)}
                />}
            </>
          )}
        </Box>
      </Provider>
    </Modal >
  );
};

export default TransferCoinModal;
