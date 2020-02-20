import React, { useEffect, useState } from "react";
import { Table } from "rendition";
import Title from "../../util/Title/Title";
import LabeledInput from "../../util/LabeledInput/LabeledInput";
import useSelectedBlock from "../../../customHooks/useSelectedBlock/useSelectedBlock";
import { BlockQuery } from "../../../generated/graphql";
import { FaRegCopy } from "react-icons/fa";
import useDataToCheck from "../../../customHooks/useDataToCheck";
import CheckSignature from "./CheckSignature";
import Confirm from "./Confirm/Confirm";

export type SelectedBlock = {
  blockNumber: number | null;
  previousBlockHash: string | null | undefined;
  merklRoot: string;
  difficulty: number;
  timestamp: any;
  nonce: number;
  blockHash: string;
  transactions: any[];
};

type Transaction = {
  inputAddress: string;
  outputAddress: string;
  signature: string;
  value: number;
  addressByInputaddress: {
    nodePublicKey: string;
  };
  pubKey: string;
  dataToCheck: {
    signedData: string;
    pubKey: string;
    signature: string;
  };
};

const CheckBlock = ({ admin }: any) => {
  const [selectedBlock]: [BlockQuery] = useSelectedBlock();
  const [dataToShow, setDataToShow] = useState();
  const [, setDataToCheck] = useDataToCheck();
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

  const dataToCheck = (block_transactions: any[]): any[] => {
    if (block_transactions !== undefined) {
      let transactions: Transaction[] = [];
      block_transactions.forEach(entry => {
        let transaction: Transaction = entry.transaction;
        transaction.pubKey = transaction.addressByInputaddress.nodePublicKey;
        transaction.dataToCheck = {
          signedData: transaction.inputAddress.concat(
            ":".concat(transaction.outputAddress.concat(":".concat(transaction.value.toString())))
          ),
          pubKey: transaction.pubKey,
          signature: transaction.signature
        };
        transactions.push(transaction);
      });
      setDataToShow(transactions);
    }
    return [];
  };

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
        transactions: b.block_transactions ? dataToCheck(b.block_transactions) : []
      });
    }
  }, [selectedBlock]);

  return (
    <>
      <Title subTitle="Block Header" />
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <LabeledInput label={"Block number"} value={block!.blockNumber} readOnly />
        <LabeledInput label={"Previous Blockhash"} value={block!.previousBlockHash} readOnly />
        <LabeledInput label={"Merkle Root"} value={block!.merklRoot} readOnly />
        <LabeledInput label={"Difficulty"} value={block!.difficulty} readOnly />
        <LabeledInput label={"Timestamp"} value={block!.timestamp} readOnly />
        <LabeledInput label={"Nonce"} value={block!.nonce} readOnly />
        <LabeledInput label={"Block Hash"} value={block!.blockHash} readOnly />
      </div>
      <div style={{ minHeight: "190px" }}>
        <Table
          columns={[
            {
              field: "dataToCheck",
              label: "Check",
              render: value => {
                return <FaRegCopy onClick={() => setDataToCheck(value)} style={{ cursor: "pointer" }} />;
              }
            },
            {
              field: "txHash",
              label: "Transactions"
            }
          ]}
          data={dataToShow}
        />
      </div>
      <CheckSignature />
      {admin && <Confirm blockToConfirm={block}/>}
    </>
  );
};

export default CheckBlock;
