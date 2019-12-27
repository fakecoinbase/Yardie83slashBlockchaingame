import React, { useEffect } from "react";
import { } from "./MempoolStyles.js";
import { Provider, Box, Table } from "rendition";
import Title from "../util/Title/Title";
import useSelectedTransactions from "../../customHooks/useSelectedTransactions/useSelectedlTransactions";
import { useOnNewTransactionAddedSubscription } from "../../generated/graphql";

const Mempool = () => {
  /**
   * e.g. data shape:
   * data = [
   * 	{
   * 		input: 'v43bc6543vr46',
   * 		output: 'fwf3tgg4fgu64',
   * 		amount: '2',
   * 		pubkey: '1215sadv8s',
   * 		signature: 'asg43vt5z332',
   * 		text: 'Some text',
   * 		txHash: '43ct3g34c4n6767'
   *	}
   * ]
   *
   */
  const { data } = useOnNewTransactionAddedSubscription();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [, setSelectedTransaction] = useSelectedTransactions();

  const columns = [
    {
      field: "inputAddress",
      label: "Input Address",
      render: (value) => {
        if (value && value.length > 20) return value.substr(0, 8) + '....' + value.substr(value.length - 8, 8);
        return value
      }
    },
    {
      field: "outputAddress",
      label: "Output Address",
      render: (value) => {
        if (value && value.length > 20) return value.substr(0, 8) + '....' + value.substr(value.length - 8, 8);
        return value
      }
    },
    {
      field: "value",
      label: "Amount",
      render: (value) => value
    },
    {
      field: "pubkey",
      label: "Public Key",
      render: (value) => {
        if (value && value.length > 20) return value.substr(0, 8) + '....' + value.substr(value.length - 8, 8);
        return value
      }
    },
    {
      field: "signature",
      label: "SIG(Tx)",
      render: (value) => {
        if (value && value.length > 20) return value.substr(0, 8) + '....' + value.substr(value.length - 8, 8);
        return value
      }
    },
    {
      field: "txHash",
      label: "Tx Hash",
      render: (value) => {
        if (value && value.length > 20) return value.substr(0, 8) + '....' + value.substr(value.length - 8, 8);
        return value
      }
    }
  ];

  return (
    <>
      <Title title="Mempool"></Title>
      <Provider>
        <Box m={3}>
          {data !== undefined && (
            <Table
              columns={columns}
              data={data.bloxx_transaction}
              // use TxHash for rowKey; because unique
              rowKey="txHash"
              onCheck={checkedItemsArray => setSelectedTransaction(checkedItemsArray)}
            />
          )}
        </Box>
      </Provider>
    </>
  );
};

export default Mempool;
