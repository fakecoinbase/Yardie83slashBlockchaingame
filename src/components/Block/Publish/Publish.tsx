import React from "react";
import {} from "./PublishStyles.js";
import { Button } from "@material-ui/core";
import Title from "../../util/Title/Title";
import useBlock from "../../../customHooks/useBlock";
import { useInsertBlockMutation } from "../../../generated/graphql";

const Publish = () => {
  const [block] = useBlock();
  const [insertBlock, { data, error, loading }] = useInsertBlockMutation();

  const onPublish = () => {
    insertBlock({
      variables: {
        blockHash: "Test",
        blockNumber: 1,
        blockStatus: "published",
        createdAt: new Date(),
        difficulty: 1,
        merkleRoot: "merkleRoot",
        nonce: 2,
        previousBlockHash: "TestBlock",
        txHash: "txHashtxHash"
      }
    })
      .then(
        success => {
          console.log(success.data!.insert_bloxx_block!.returning.entries);
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
