import React from "react";
import {} from "./PublishStyles.js";
import { Button } from "@material-ui/core";
import Title from "../../util/Title/Title";
import useBlock, { BlockType } from "../../../customHooks/useBlock";
import { useUpsertBlockMutation } from "../../../generated/graphql";
import useTimer from "../../../customHooks/useTimer";

const Publish = () => {
  const [block]: [BlockType] = useBlock();
  const [upsertBlockMutation] = useUpsertBlockMutation();
  const [, setIsTimerActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useTimer();

  const onPublish = () => {
    console.log(block);
    upsertBlockMutation({
      variables: {
        blockHash: block.blockHash,
        blockNumber: block.blockNumber,
        blockStatus: block.blockStatus,
        createdAt: block.timestamp,
        difficulty: block.difficulty,
        merkleRoot: block.merkleRoot,
        nonce: block.nonce,
        previousBlockHash: block.previousBlockHash
      }
    })
      .then(
        success => {
          console.log(success.data!.insert_bloxx_block!);
          setIsTimerActive(true);
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
