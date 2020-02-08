import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { SelectedBlock } from "../CheckBlock";
import {
  useBlockLazyQuery,
  useConfirmBlockMutation,
  useConfirmBlockTransactionMutation,
  useUpdateAddressValuesMutation
} from "../../../../generated/graphql";

type Props = {
  blockToConfirm: SelectedBlock;
};

const Confirm = ({ blockToConfirm }: Props) => {
  const [blockQuery, { data: blockQueryData }] = useBlockLazyQuery();
  const [isBlockConfirmed, setIsBlockConfirmed] = useState(false);
  const [confirmBlock] = useConfirmBlockMutation();
  const [confirmTransaction] = useConfirmBlockTransactionMutation();
  const [updateAddressValues] = useUpdateAddressValuesMutation();

  useEffect(() => {
    blockQuery({ variables: { blockHash: blockToConfirm.blockHash } });
  }, [blockToConfirm, blockQuery]);

  useEffect(() => {
    if (blockQueryData !== undefined && blockQueryData.bloxx_block[0] !== undefined) {
      setIsBlockConfirmed(blockQueryData!.bloxx_block[0].blockStatus === "confirmed");
    } else {
      setIsBlockConfirmed(false);
    }
  }, [blockQueryData]);

  const onConfirm = () => {
    if (blockQueryData !== undefined) {
      if (blockQueryData.bloxx_block[0] !== undefined) {
        /**
         * If there are transactions, confirm them, then adjust the coins of each node
         */
        if (blockQueryData.bloxx_block[0].block_transactions.length !== 0) {
          blockQueryData.bloxx_block[0].block_transactions.forEach(block_transaction => {
            confirmTransaction({
              variables: {
                blockHash: blockQueryData!.bloxx_block[0].blockHash,
                txHash: block_transaction.transaction.txHash
              }
            }).then(res => {
              updateAddressValues({
                variables: {
                  inAddress: res.data!.update_bloxx_transaction!.returning[0].inputAddress,
                  outAddress: res.data!.update_bloxx_transaction!.returning[0].outputAddress,
                  amountAdd: res.data!.update_bloxx_transaction!.returning[0].value,
                  amountSub: res.data!.update_bloxx_transaction!.returning[0].value * -1
                }
              })
            });
          });
          /**
           * Confirm the block. Blocks without transactions will be confirmed too
           */
        }
        if (blockQueryData!.bloxx_block[0].blockHash !== undefined)
          confirmBlock({ variables: { blockHash: blockQueryData!.bloxx_block[0].blockHash } }).then(() =>
            setIsBlockConfirmed(true)
          );
      }
    }
  };

  return (
    <div style={{ float: "right", flexDirection: "row", flex: 1, paddingTop: "10px", paddingBottom: "10px" }}>
      <Button
        variant="contained"
        color="primary"
        disabled={isBlockConfirmed}
        size="small"
        onClick={onConfirm}
        style={{ marginRight: "10px" }}
      >
        Confirm Block
      </Button>
    </div>
  );
};

export default Confirm;
