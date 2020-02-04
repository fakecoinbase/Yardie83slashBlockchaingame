import React, { useEffect, useState } from "react";
import { Table } from "rendition";
import Title from "../../util/Title/Title";
import LabeledInput from "../../util/LabeledInput/LabeledInput";
import useSelectedBlock from "../../../customHooks/useSelectedBlock/useSelectedBlock";
import { BlockQuery } from "../../../generated/graphql";

type SelectedBlock = {
  blockNumber: number | null;
  previousBlockHash: string | null | undefined;
  merklRoot: string;
  difficulty: number;
  timestamp: any;
  nonce: number;
  blockHash: string;
  transactions: any;
};

const CheckBlock = () => {
  const [selectedBlock]: [BlockQuery] = useSelectedBlock();
  const [block, setBlock] = useState<SelectedBlock>({
    blockNumber: 0,
    previousBlockHash: "",
    merklRoot: "",
    difficulty: 0,
    timestamp: new Date().toUTCString(),
    nonce: 0,
    blockHash: "",
    transactions: []
  });

  useEffect(() => {
    if (selectedBlock && selectedBlock.bloxx_block) {
      const b = selectedBlock.bloxx_block[0];
      setBlock({
        blockNumber: b.blockNumber ? b.blockNumber : 0,
        previousBlockHash: b.previousBlockHash ? b.previousBlockHash : "-",
        merklRoot: b.merkleRoot ? b.merkleRoot : "",
        difficulty: b.difficulty ? b.difficulty : 0,
        timestamp: b.createdAt ? new Date(b.createdAt).toUTCString() : new Date().toUTCString(),
        nonce: b.nonce ? b.nonce : 0,
        blockHash: b.blockHash ? b.blockHash : "",
        transactions: b.block_transactions ? b.block_transactions : []
      });
    }
  }, [selectedBlock]);

  return (
    <>
      <Title subTitle="Block Header" />
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <LabeledInput label={"Block number"} value={block!.blockNumber} readOnly />
        <LabeledInput label={"Previous Block Hash"} value={block!.previousBlockHash} readOnly />
        <LabeledInput label={"Merkl Root"} value={block!.merklRoot} />
        <LabeledInput label={"Difficulty"} readOnly value={block!.difficulty} />
        <LabeledInput label={"Timestamp"} readOnly value={block!.timestamp} />
        <LabeledInput label={"Nonce"} value={block!.nonce} />
        <LabeledInput label={"Block Hash"} value={block!.blockHash} />
      </div>
      {/* <div style={{ minHeight: "250px" }}>
        <Table
          columns={[
            {
              field: "dataToCheck",
              label: "Copy to Check",
              render: value => {
                return <FaRegCopy onClick={() => setDataToCheck(value)} style={{ cursor: "pointer" }} />;
              }
            },
            {
              field: "txHash",
              label: "Transactions"
            }
          ]}
          data={selectedTransactions}
          rowKey="txHash"
        />
      </div> */}
    </>
  );
};

export default CheckBlock;
