import React, { useEffect, useState } from "react";
import { Container, Modal, Provider, Box, Table, Flex, Txt, Input, Alert } from "rendition";
import { Button } from "@material-ui/core";
import useAdminModal from "../../../../customHooks/useAdminModal";
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
import LoadingIndicator from "../../../util/LoadingIndicator";
import merkle from '../../../../services/merklService'

const TransferCoinModal = ({ adminInfo }) => {
  const [, setShowAdminModal] = useAdminModal();
  const { data: newNodeSubscriptionData, loading } = useOnNewNodeAddedSubscription();
  const [nodes, setNodes] = useState([]);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [amountToSet, setamountToSet] = useState(0);
  const [insertAdminTransactionsMutation, { loading: insertAdminTransactionMutationLoading }] = useInsertAdminTransactionsMutation();
  const [insertBlock, { loading: insertBlockLoading }] = useInsertBlockMutation();
  const [coinsSent, setCoinsSent] = useState(false);
  const [isSendCoinsButtonDisabled, setIsSendCoinsButtonDisabled] = useState(false);

  useEffect(() => {
    if (newNodeSubscriptionData) {
      let _nodes = [];

      newNodeSubscriptionData.bloxx_node.forEach(node => {
        if (
          node.publicKey !== "undefined" &&
          typeof node.addresses[0] !== "undefined" &&
          node.addresses[0].balance !== null
        ) {

          let amountToSend = 0;
          if (!isSendCoinsButtonDisabled) {
            nodes.forEach(localNode => { if (localNode.address === node.addresses[0].id) amountToSend = localNode.amountToSend })
          }

          _nodes.push({
            address: node.addresses[0].id,
            balance: node.addresses[0].balance,
            amountToSend: amountToSend,
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

  const setIntialCoins = () => {
    selectedNodes.forEach((selectedNode) => {
      setNodes((previousNodes) => previousNodes.map((previousNode) => {
        if (previousNode.address === selectedNode.address) {
          previousNode.amountToSend = amountToSet
        }
        return previousNode
      }))
    })
  }

  /**
   * Transfers the intials coins from the admin node to each of the selected user nodes.
   * This will also create or if already exists update a Genesis block. 
   */
  const transferCoins = () => {
    // blockHashbyBlockNumberQuery({ variables: 0 });
    if (nodes.length > 0) {
      const transactions = [];
      const timestamp = ((Date.now() / 1000) | 0).toString();
      nodes.forEach(_node => {
        const signature = sign(
          adminInfo.address.id.concat(":".concat(_node.address.concat(":".concat(_node.amountToSend.toString().concat(':'.concat(timestamp)))))),
          adminInfo.privateKey
        );
        const txHash = hash(
          _node.address.concat(":".concat(_node.amountToSend.toString().concat(":".concat(signature))))
        );
        transactions.push({
          inputAddress: adminInfo.address.id,
          outputAddress: _node.address.id,
          value: _node.amountToSend <= 0 ? 0 : _node.amountToSend,
          signature: signature,
          timestamp: timestamp,
          txHash: txHash,
          address: {
            data: {
              id: _node.address,
              nodePublicKey: nodes.find(node => node.address === _node.address).nodePublicKey,
              balance: _node.amountToSend
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
             * Calculate the new Merkel root
             */
            let txHashes = res.data.insert_bloxx_transaction.returning.map(tx => tx.txHash);
            const merkel = merkle(txHashes);

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
              blockData.difficulty +
              ":" +
              blockData.timestamp +
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
            }).catch(error => console.debug(error)).then(setCoinsSent(true));
          })
          .catch(error => {
            console.debug(error);
          });
      } catch (error) { console.debug(error) }
    }
  };

  const columns = [
    {
      field: "address",
      label: "Node Address"
    },
    {
      field: "amountToSend",
      label: "Coins to transfer",
    },
    {
      field: "balance",
      label: "Current Coins",
      sortable: true
    }
  ];

  return (
    <Modal
      title={"Transfer coins"}
      done={() => {
        if (newNodeSubscriptionData.bloxx_node.some(node => node.addresses[0].balance > 0)) setIsSendCoinsButtonDisabled(true);
        setShowAdminModal(false);
      }}
    >
      <Provider>
        <Box m={3}>
          {loading && <LoadingIndicator />}
          {(newNodeSubscriptionData !== undefined && !loading) && (
            <>
              {(!isSendCoinsButtonDisabled && !coinsSent) &&
                <Flex m={3} alignItems={"center"}>
                  <Box pr={3}>
                    <Input width={100} type={"number"} min={0} onChange={e => setamountToSet(parseInt(e.target.value))} />
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
                  <Flex flexDirection="row">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={setIntialCoins}
                      style={{ marginRight: "10px" }}
                    >
                      Set
                    </Button>
                  </Flex>
                </Flex>}
              {(isSendCoinsButtonDisabled && coinsSent) &&
                <Container m={3}>
                  <Alert success emphasized>
                    <Txt>Coins were transferred!</Txt>
                  </Alert>
                </Container>}
              {(isSendCoinsButtonDisabled && !coinsSent) &&
                <Container m={3}>
                  <Alert info emphasized>
                    <Txt>Coins have already been transferred for this game session. Reset the game to send coins again.</Txt>
                  </Alert>
                </Container>}
              {(insertBlockLoading || insertAdminTransactionMutationLoading) ?
                <LoadingIndicator />
                :
                <Table
                  columns={columns}
                  data={nodes}
                  // use adress for rowKey; because it is unique
                  rowKey="address"
                  onCheck={(isSendCoinsButtonDisabled) ? false : selectedNodes => setSelectedNodes(selectedNodes)}
                />}
              {(!isSendCoinsButtonDisabled && !coinsSent) &&
                <>
                  <Flex justifyContent={"flex-end"} mt={3}>
                    <Button
                      variant="contained"
                      color="default"
                      size="small"
                      onClick={transferCoins}
                      style={{ marginRight: "10px" }}
                    >
                      Transfer Coins
                  </Button>
                  </Flex>
                  <Box mt={3} pr={3} mb={3}>
                    <Container m={3}>
                      <Alert info emphasized>
                        <Txt>Sending coins will generate the Genesis block and no more changes will be possible.</Txt>
                      </Alert>
                    </Container>
                  </Box>
                </>}
            </>
          )}
        </Box>
      </Provider>
    </Modal >
  );
};

export default TransferCoinModal;
