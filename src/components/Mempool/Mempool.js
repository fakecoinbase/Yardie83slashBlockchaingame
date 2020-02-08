import React, { useEffect, useState } from "react";
import { Provider, Box, Table, TextWithCopy } from "rendition";
import Title from "../util/Title/Title";
import useSelectedTransactions from "../../customHooks/useSelectedTransactions/useSelectedlTransactions";
import { useOnNewTransactionAddedSubscription, useOnBlockAddedSubscription } from "../../generated/graphql";

const Mempool = () => {

  const { data } = useOnNewTransactionAddedSubscription();
  const [dataToShow, setDataToShow] = useState();
  const [selectedTransactions, setSelectedTransactions] = useSelectedTransactions();

  // Run whenever there new transactions have been added by users
  useEffect(() => {
    if (data !== undefined) {
      // Add the pubKey key/value to the transactions in the mempool
      data.bloxx_transaction.forEach(transaction => {
        transaction.pubKey = transaction.addressByInputaddress.nodePublicKey;
      });
      // Filter out transactions that have been definitely assigned to a confirmed block
      const unconfirmedTransactions = data.bloxx_transaction.filter(transaction => transaction.blockHash === null);
      // Show the remaining transactions
      setDataToShow(unconfirmedTransactions.reverse());
    }
  }, [data]);

  useEffect(() => {
    if (data !== undefined) {
      const unconfirmedTransactions = data.bloxx_transaction.filter(transaction => transaction.blockHash === null);
      let unconfirmedSelectedTransactions = [];
      unconfirmedTransactions.forEach(unconfirmedTransaction =>
        selectedTransactions.forEach(selectedTransaction => {
          if (selectedTransaction.txHash === unconfirmedTransaction.txHash) unconfirmedSelectedTransactions.push(selectedTransaction)
        })
      )
      setSelectedTransactions(unconfirmedSelectedTransactions);
    }
  }, [dataToShow])

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
              onCheck={checkedItemsArray => setSelectedTransactions(checkedItemsArray)}
            />
          )}
        </Box>
      </Provider>
    </>
  );
};

export default Mempool;
