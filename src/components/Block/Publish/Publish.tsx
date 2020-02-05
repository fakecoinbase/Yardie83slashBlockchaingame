import React, { useState } from "react";
import {} from "./PublishStyles.js";
import { Button } from "@material-ui/core";
import Title from "../../util/Title/Title";
import useBlock, { BlockType } from "../../../customHooks/useBlock";
import { useInsertBlockMutation } from "../../../generated/graphql";
import useTimer from "../../../customHooks/useTimer";
import { Alert, Box } from "rendition";

const Publish = () => {
  const [block]: [BlockType, React.Dispatch<React.SetStateAction<BlockType | undefined>>] = useBlock();
  const [insertBlock] = useInsertBlockMutation();
  const [, setIsTimerActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useTimer();
  const [toast, setToast] = useState<React.ReactNode | null>();

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
          setToast(
            <Alert success emphasized style={{ width: "350px" }} onDismiss={() => setToast(null)}>
              Block published
            </Alert>
          );
          setIsTimerActive(true);
        },
        rejected => {
          setToast(
            <Alert warning style={{ width: "350px" }} emphasized onDismiss={() => setToast(null)}>
              Check the block data again
            </Alert>
          );
        }
      )
      .catch(error => {
        setToast(
          <Alert danger emphasized prefix={false} style={{ width: "350px" }} onDismiss={() => setToast(null)}>
            Could not publish block
          </Alert>
        );
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
        <div
          style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}
        >
          <Button style={{ width: "160px" }} variant="contained" color="primary" onClick={onPublish}>
            Publish
          </Button>
          {toast && <Box m={2}>{toast}</Box>}
        </div>
      </div>
    </>
  );
};

export default Publish;
