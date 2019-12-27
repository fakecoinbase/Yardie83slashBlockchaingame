import React, { useState, useEffect } from "react";
import { Table } from "rendition";
import {} from "./BlockStyles.js";
import { Button } from "@material-ui/core";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput";
import Publish from "./Publish";
import useMempoolTransactions from "../../customHooks/useSelectedTransactions/useSelectedlTransactions";
import useBlock from "../../customHooks/useBlock";

const Block = () => {
  const [block, setBlock] = useBlock();
  const [timestamp] = useState(new Date());
  const [difficulty] = useState(1);
  const [selectedTransactions] = useMempoolTransactions();

  const onChange = (key: string, value: any) => {
    setBlock({ ...block, timestamp, difficulty, [key]: value });
  };

  useEffect(() => {
    console.log("[Block] ", block);
  }, [block]);

  useEffect(() => {
    setBlock({ ...block, transactions: selectedTransactions });
  }, [selectedTransactions]);

  return (
    <>
      <Title title="Block" subTitle="Block Header"></Title>
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <LabeledInput label={"Block#"} onChange={e => onChange("blocknumber", parseInt(e.target.value))} />
        <LabeledInput label={"Previous Block Hash"} onChange={e => onChange("previousBlockHash", e.target.value)} />
        <LabeledInput label={"Merkle Root"} onChange={e => onChange("merkleRoot", e.target.value)} />
        <LabeledInput
          label={"Timestamp"}
          readOnly
          value={timestamp.toUTCString()}
          onChange={e => onChange("createdAt", timestamp)}
        />
        <LabeledInput
          label={"Difficulty"}
          readOnly
          value={difficulty}
          onChange={e => onChange("difficulty", e.target.value)}
        />
        <LabeledInput label={"Block Hash"} onChange={e => onChange("blockHash", e.target.value)} />
        <LabeledInput label={"Nonce"} onChange={e => onChange("nonce", parseInt(e.target.value))} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingBottom: "10px",
            paddingTop: "10px"
          }}
        >
          <Button variant="contained" size="small">
            Copy to Hasher
          </Button>
          <Button variant="contained" size="small">
            Solve Nonce
          </Button>
          <Button variant="contained" color="primary" size="small" onClick={() => {}}>
            Generate Nonce
          </Button>
        </div>
      </div>
      <Title subTitle="Transactions"></Title>
      <div style={{ minHeight: "250px" }}>
        <Table
          columns={[
            {
              field: "txHash",
              label: "Transaction Hash"
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