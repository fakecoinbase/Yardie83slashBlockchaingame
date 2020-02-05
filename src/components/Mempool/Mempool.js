import React, { useEffect, useState } from "react";
import { Provider, Box, Table, TextWithCopy } from "rendition";
import Title from "../util/Title/Title";
import useSelectedTransactions from "../../customHooks/useSelectedTransactions/useSelectedlTransactions";
import { useOnNewTransactionAddedSubscription } from "../../generated/graphql";

const Mempool = () => {

  const { data } = useOnNewTransactionAddedSubscription();
  const [dataToShow, setDataToShow] = useState();
  const [, setSelectedTransaction] = useSelectedTransactions();

  useEffect(() => {
    if (data !== undefined) {
      data.bloxx_transaction.forEach(transaction => {
        transaction.pubKey = transaction.addressByInputaddress.nodePublicKey;
      });
      setDataToShow(data.bloxx_transaction.reverse());
    }
  }, [data]);

  const columns = [
    {
      field: "inputAddress",
      label: "Input Address",
      render: value => {
        if (value && value.length > 20)
          return (
            value.substr(0, 7) + "...." + value.substr(value.length - 8, 8)
          );
        return value;
      }
    },
    {
      field: "outputAddress",
      label: "Output Address",
      render: value => {
        if (value && value.length > 20)
          return (
            value.substr(0, 7) + "...." + value.substr(value.length - 8, 7)
          );
        return value;
      }
    },
    {
      field: "value",
      label: "Amount",
      render: value => value
    },
    {
      field: "pubKey",
      label: "Public Key",
      render: value => {
        if (value && value.length > 20)
          return (
            value.substr(27, 7) + "...." + value.substr(value.length - 34, 7)
          );
        return value;
      }
    },
    {
      field: "signature",
      label: "SIG(Tx)",
      render: value => {
        if (value && value.length > 20) {
          return (
            value.substr(0, 4) + "...." + value.substr(value.length - 4, 4)
          );
        }
        return <TextWithCopy copy={value}>{value}</TextWithCopy>;
      }
    },
    {
      field: "txHash",
      label: "Tx Hash",
      render: value => {
        if (value && value.length > 20)
          return (
            value.substr(0, 5) + "...." + value.substr(value.length - 5, 5)
          );
        return value;
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
              data={dataToShow}
              // use TxHash for rowKey; because it is unique
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
