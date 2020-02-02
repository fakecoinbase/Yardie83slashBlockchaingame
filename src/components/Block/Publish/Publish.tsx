import React from "react";
import {} from "./PublishStyles.js";
import { Button } from "@material-ui/core";
import Title from "../../util/Title/Title";
import useBlock, { BlockType } from "../../../customHooks/useBlock";
import { useInsertBlockMutation } from "../../../generated/graphql";
import useTimer from "../../../customHooks/useTimer";
import useNotification from "../../../customHooks/useNotification/useNotification.js";

const Publish = () => {
  const [block, setBlock]: [BlockType, React.Dispatch<React.SetStateAction<BlockType | undefined>>] = useBlock();
  const [insertBlock] = useInsertBlockMutation();
  const [, setIsTimerActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useTimer();
  const [notification, setNotification] = useNotification();

  const onPublish = () => {
    insertBlock({
      variables: {
        blockHash: block.blockHash,
        blockNumber: block.blockNumber,
        blockStatus: block.blockStatus,
        createdAt: block.timestamp,
        difficulty: block.difficulty,
        merkleRoot: block.merkleRoot,
        nonce: block.nonce,
        previousBlockHash: block.previousBlockHash,
        block_transactions: block.block_transactions
      }
    })
      .then(
        success => {
          console.log(success.data!.insert_bloxx_block!);
          setBlock(undefined);
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
