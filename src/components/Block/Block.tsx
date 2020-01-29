import React, { useState, useEffect } from "react";
import { Table } from "rendition";
import {} from "./BlockStyles.js";
import { Button } from "@material-ui/core";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput";
import Publish from "./Publish";
import useBlock, { BlockType } from "../../customHooks/useBlock";
import useSelectedTransactions from "../../customHooks/useSelectedTransactions/useSelectedlTransactions";
import miningService from "../../services/miningService.js";
import useTimer from "../../customHooks/useTimer";
import useDataToHash from "../../customHooks/useDataToHash";

const Block = () => {
  const [block, setBlock]: [BlockType, React.Dispatch<React.SetStateAction<BlockType | undefined>>] = useBlock();
  const [timestamp, setTimestamp] = useState(new Date());
  const [isTimerActive, setIsTimerActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useTimer();
  const [clickCount, setClickCount] = useState(0);
  const [, setDataToHash] = useDataToHash();
  const [difficulty] = useState(1);
  const [selectedTransactions] = useSelectedTransactions();

  const onChange = (key: string, value: any) => {
    setBlock({ ...block, timestamp, difficulty, blockStatus: "pending", [key]: value });
  };

  useEffect(() => {
    let interval = setInterval(() => {}, 10000);
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimestamp(new Date());
      }, 1000);
    } else if (!isTimerActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, setTimestamp]);

  useEffect(() => {
    setBlock( {...block} );
  }, [selectedTransactions]);

  //TODO make sure all the variables are not empty strings or undefined
  const copyToHasher = () => {
    setClickCount(() => clickCount + 1);
    setIsTimerActive(false);
    let blockData =
      block.blockNumber +
      ":" +
      block.previousBlockHash +
      ":" +
      block.merkleRoot +
      ":" +
      block.timestamp!.toISOString() +
      ":" +
      block.difficulty +
      ":" +
      block.nonce;
    setDataToHash(blockData);
  };

  const solveNonce = () => {
    setIsTimerActive(false);
    let blockData =
      block.blockNumber +
      ":" +
      block.previousBlockHash +
      ":" +
      block.merkleRoot +
      ":" +
      block.timestamp!.toISOString() +
      ":" +
      block.difficulty;
    const nonce: number = miningService(blockData)!;
    setBlock({ ...block, nonce: nonce });
  };

  return (
    <>
      <Title title="Block" subTitle="Block Header"></Title>
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <LabeledInput label={"Block#"} onChange={e => onChange("blockNumber", parseInt(e.target.value))} />
        <LabeledInput label={"Previous Block Hash"} onChange={e => onChange("previousBlockHash", e.target.value)} />
        <LabeledInput label={"Merkle Root"} onChange={e => onChange("merkleRoot", e.target.value)} />
        <LabeledInput
          label={"Difficulty"}
          readOnly
          value={difficulty}
          onChange={e => onChange("difficulty", e.target.value)}
        />
        <LabeledInput
          label={"Timestamp"}
          readOnly
          value={timestamp.toUTCString()}
          onChange={e => onChange("createdAt", timestamp)}
        />
        <LabeledInput label={"Nonce"} onChange={e => onChange("nonce", parseInt(e.target.value))} value={block.nonce} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingBottom: "10px",
            paddingTop: "10px"
          }}
        >
          <Button variant="contained" size="small" onClick={copyToHasher}>
            Copy to Hasher
          </Button>
          <Button variant="contained" size="small" onClick={solveNonce}>
            Solve Nonce
          </Button>
        </div>
        <LabeledInput label={"Block Hash"} onChange={e => onChange("blockHash", e.target.value)} />
      </div>
      <div style={{ minHeight: "250px" }}>
        <Table
          columns={[
            {
              field: "txHash",
              label: "Selected Transactions [TxHash] max. 4"
            }
          ]}
          data={selectedTransactions}
          rowKey="txHash"
        />
      </div>
      <Publish />
    </>
  );
};

export default Block;
