import React, { useEffect, useState } from "react";
import { Table } from 'rendition'
import { } from "./BlockStyles.js";
import { Button } from "@material-ui/core";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput";
import Publish from "./Publish";
import useMempoolTransactions from "../../customHooks/useMempoolTransactions/useMempoolTransactions.js";

const Block = () => {

  const [selectedTransactions,] = useMempoolTransactions();
  const [timestamp, setTimestamp] = useState(Date.now())

  // setTimeout(() => {
  //   setTimestamp(Date.now())
  // }, 100);

  console.log("selectedTransactions", selectedTransactions)

  return (
    <>
      <Title title="Block" subTitle="Block Header"></Title>
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <LabeledInput label={"Block#"} />
        <LabeledInput label={"Previous Block"} />
        <LabeledInput label={"Merkle Root"} />
        <LabeledInput label={"Timestamp"} readOnly value={timestamp} />
        <LabeledInput label={"Difficulty"} readOnly value={1} />
        <LabeledInput label={"Block Hash"} />
        <LabeledInput label={"Nonce"} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
           <Button variant="contained" size="small">
            Copy to Hasher
          </Button>
          <Button variant="contained" size="small">
            Solve Nonce
          </Button>
          <Button variant="contained" color="primary" size="small" onClick={() => { }}>
            Generate Nonce
          </Button>
        </div>
      </div>
      <Title subTitle="Transactions"></Title>
      <div style={{ minHeight: "250px" }}>
        <Table
          columns={[{
            field: 'txHash',
            label: 'Transaction Hash'}]
          }
          data={selectedTransactions}
          rowKey='txHash'
        />
      </div>
      <Publish/>
    </>
  );
};

export default Block;
