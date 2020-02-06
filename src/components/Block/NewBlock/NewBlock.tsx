import React, { useState, useEffect } from "react";
import { Table } from "rendition";
import { Button } from "@material-ui/core";
import Title from "../../util/Title/Title";
import LabeledInput from "../../util/LabeledInput/LabeledInput";
import Publish from "../Publish/Publish";
import useSelectedTransactions from "../../../customHooks/useSelectedTransactions/useSelectedlTransactions";
import { useOnBlockAddedSubscription } from "../../../generated/graphql";
import useBlock, { BlockType } from "../../../customHooks/useBlock/useBlock";
import miningService from "../../../services/miningService";
import useTimer from "../../../customHooks/useTimer/useTimer";
import useDataToHash from "../../../customHooks/useDataToHash/useDataToHash";

const Block = () => {
  const { data } = useOnBlockAddedSubscription();
  const [block, setBlock]: [BlockType, React.Dispatch<React.SetStateAction<BlockType | undefined>>] = useBlock();
  const [blockNumber, setBlockNumber] = useState<string>("-");
  const [blockNumberOptions, setBlockNumberOptions] = useState<string[]>();
  const [previousBlockHash, setPreviousBlockHashlockNumber] = useState<string>("-");
  const [previousBlockHashOptions, setPreviousBlockHashOptions] = useState<
    { blockNumber: string; blockHash: string }[]
  >();
  const [timestamp, setTimestamp] = useState(new Date());
  const [isTimerActive, setIsTimerActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useTimer();
  const [nonce, setNonce] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [, setDataToHash] = useDataToHash();
  const [difficulty] = useState(1);
  const [selectedTransactions] = useSelectedTransactions();

  useEffect(() => {
    if (data !== undefined) {
      setBlockNumberOptions(Array.from(new Set(data!.bloxx_block.map(block => (block.blockNumber + 1).toString()))));
      const prevBlockOptions = data!.bloxx_block.map(block => ({
        blockNumber: block.blockNumber.toString()!,
        blockHash: block.blockHash!
      }));
      setPreviousBlockHashOptions(prevBlockOptions);
    }
  }, [data]);

  /**
   * On change of the input fields we update the block state
   * @param key
   * @param value
   */
  const onChange = (key: string, value: any) => {
    setBlock({ ...block, timestamp, difficulty, blockStatus: "unconfirmed", [key]: value });
  };

  /**
   * The timer for the block timestamp. It is active until the
   * user clicks copy to hasher for the first time and restarts
   * when the block has been successfully published
   */
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

  /**
   * The block list of selected transaction is updated
   * whenever the user selects transactions from the mempool
   */
  useEffect(() => {
    const data = selectedTransactions.map(function(transaction: any) {
      return { txHash: transaction.txHash };
    });
    setBlock({ ...block, block_transactions: { data } });
  }, [selectedTransactions]);

  /**
   * Called when the user clicks copy to hasher.
   * The hasher hashes any type of data, so we decided arbitrarily
   * on the ":" as the delimiter for the various data fields
   */
  //TODO validate user data
  const onCopyToHasher = () => {
    setIsTimerActive(false);
    setClickCount(() => clickCount + 1);
    let blockData =
      blockNumber +
      ":" +
      previousBlockHash +
      ":" +
      block.merkleRoot +
      ":" +
      block.timestamp!.toISOString() +
      ":" +
      block.difficulty +
      ":" +
      nonce;
    setDataToHash(blockData);
  };

  /**
   * Automatically solves the nonce for the user. The user can
   * use this function after a certain amount of manual tries.
   */
  const onSolveNonce = () => {
    setIsTimerActive(false);
    setNonce(miningService(block)!);
    setBlock({ ...block, nonce });
    setClickCount(0);
  };

  return (
    <>
      <Title subTitle="Block Header" />
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <LabeledInput
          label={"Block number"}
          options={blockNumberOptions && blockNumberOptions!.sort()}
          value={blockNumber}
          onChange={({ option }) => {
            setBlockNumber(option);
            onChange("blockNumber", parseInt(option));
          }}
        />
        <LabeledInput
          label={"Previous Block Hash"}
          options={
            previousBlockHashOptions &&
            previousBlockHashOptions
              .filter(option => parseInt(option.blockNumber) === parseInt(blockNumber) - 1)
              .map(option => option.blockHash)
          }
          value={previousBlockHash}
          onChange={({ option }) => {
            setPreviousBlockHashlockNumber(option);
            onChange("previousBlockHash", option);
          }}
        />
        <LabeledInput label={"Merkl Root"} onChange={e => onChange("merkleRoot", e.target.value)} />
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
        <LabeledInput
          label={"Nonce"}
          onChange={e => {
            setNonce(parseInt(e.target.value));
            onChange("nonce", parseInt(e.target.value));
          }}
          value={isNaN(nonce) ? 0 : nonce}
        />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingBottom: "10px",
            paddingTop: "10px"
          }}
        >
          <Button variant="contained" size="small" color="primary" onClick={onCopyToHasher} style={{marginRight: "10px"}}>
            Copy to Hasher
          </Button>
          <Button variant="contained" disabled={clickCount !== 3} color="primary" size="small" onClick={onSolveNonce}>
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
