import React from "react";
import {} from "./PublishStyles.js";
import { Button } from "@material-ui/core";
import Title from "../../util/Title/Title";
import useBlock, { Block } from "../../../customHooks/useBlock";
import { useUpsertBlockMutation, Bloxx_Transaction_Constraint, Bloxx_Transaction_Update_Column } from "../../../generated/graphql";

const Publish = () => {
  const [block]: [Block] = useBlock();
  const [upsertBlockMutation] = useUpsertBlockMutation();

  /**
   * 
   */
  //TODO Implement appropriate checks before allowing users to publish a block
  const onPublish = () => {
    upsertBlockMutation({
      variables: {
        objects: [
          {
            blockHash: block.blockHash,
            blockNumber: block.blockNumber,
            blockStatus: block.blockStatus,
            createdAt: block.timestamp,
            difficulty: block.difficulty,
            merkleRoot: block.merkleRoot,
            nonce: block.nonce,
            previousBlockHash: block.previousBlockHash,
            transactions: {
              on_conflict: {
                constraint: Bloxx_Transaction_Constraint.TransactionPkey,
                update_columns: [Bloxx_Transaction_Update_Column.BlockNumber]
               },
               data: block.transactions! }
          }
        ]
      }, 
    })
      .then(
        success => {
          console.log(success.data!.insert_bloxx_block!)
        },
        rejected => {
          console.log("[Rejected] ", rejected);
        }
      )
      .catch(reason => {
        console.log("[Error Reason] ", reason);
      });
  };
  return (
    <>
      <Title subTitle="Publish Block" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
          paddingTop: "10px"
        }}
      >
        <Button variant="contained" color="primary" onClick={onPublish}>
          Publish
        </Button>
      </div>
    </>
  );
};

export default Publish;
