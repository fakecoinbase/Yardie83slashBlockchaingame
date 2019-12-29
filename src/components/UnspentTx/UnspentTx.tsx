import React, { useState, useEffect } from "react";
import {} from "./UnspentTxStyles.js";
import { Provider, Box, Table, TableColumn } from "rendition";
import Title from "../util/Title/Title";
import { useAddressSubscription } from "../../generated/graphql";

const UnspentTx = () => {
  const [nodes, setNodes] = useState<Array<Object>>([]);

  const { data } = useAddressSubscription();

  useEffect(() => {
    if (data) {
      let _nodes: { address?: string; amount?: number | null }[] = [];

      data.bloxx_address.forEach(node => {
        if (node.id !== "undefined") {
          _nodes.push({
            address: node.id,
            amount: node.balance
          });
        }
      });
      setNodes(_nodes);
    }
  }, [data]);

  // const data = [
  // 	{
  // 		input: 'v43bc6543vr46',
  // 		output: 'fwf3tgg4fgu64',
  // 		amount: '2',
  // 		pubkey: '1215sadv8s',
  // 		signature: 'asg43vt5z332',
  // 		text: 'Some text',
  // 		txHash: '43ct3gc4n6767'
  // 	}
  // ]

  const columns: TableColumn<any>[] = [
    {
      field: "address",
      label: "Address"
    },
    {
      field: "amount",
      label: "Amount",
      render: (value: string) => <code>{value}</code>
    }
    // {
    // 	field: 'txHash',
    // 	label: 'Tx Hash',
    // 	render: value => {
    // 		// shorten value to fit column width, then
    // 		const newValue = value
    // 		return (
    // 			// newValue
    // 			newValue
    // 		)
    // 	}
    // }
  ];

  return (
    <>
      <Title title="Unspent Transactions (UTXO)"></Title>
      <Provider>
        <Box m={3}>
          <Table columns={columns} data={nodes} />
        </Box>
      </Provider>
    </>
  );
};

export default UnspentTx;
