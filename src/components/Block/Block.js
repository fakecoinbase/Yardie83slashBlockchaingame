import React from "react";
import {} from "./BlockStyles.js";
import { Button } from "@material-ui/core";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput";
import Publish from "./Publish";

const Block = () => {
  return (
    <>
      <Title title="Block" subTitle="Block Header"></Title>
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <LabeledInput label={"Block#"} />
        <LabeledInput label={"Previous Block"} />
        <LabeledInput label={"Merkle Root"} />
        <LabeledInput label={"Timestamp"} />
        <LabeledInput label={"Difficulty"} />
        <LabeledInput label={"Coinbase Tx"} />
        <LabeledInput label={"Nonce"} />
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            paddingBottom: "10px",
            paddingTop: "10px"
          }}
        >
          <Button variant="contained" color="primary">
            Generate Nonce
          </Button>
        </div>
        <LabeledInput label={"Block Hash"} />
      </div>
      <Title subTitle="Transactions"></Title>
      <div style={{ minHeight: "250px" }}></div>
      <Publish></Publish>
    </>
  );
};

export default Block;
