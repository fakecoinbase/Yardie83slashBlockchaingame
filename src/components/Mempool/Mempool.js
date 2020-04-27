import React, { useEffect, useState, useRef } from "react";
import { Provider, Box, Table, TextWithCopy } from "rendition";
import { FaRegCopy } from 'react-icons/fa'
import IconButton from '@material-ui/core/IconButton';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import Title from "../util/Title/Title";
import useMempoolModal from '../../customHooks/useMempoolModal'
import useSelectedTransactions from "../../customHooks/useSelectedTransactions";
import { useOnNewTransactionAddedSubscription } from "../../generated/graphql";
import useDataToCheck from "../../customHooks/useDataToCheck";
import mempoolIcon from '../../../src/assets/img/mempool.svg'

const Mempool = () => {

  const { data, loading } = useOnNewTransactionAddedSubscription();
  const [dataToShow, setDataToShow] = useState();
  const [, setDataToCheck] = useDataToCheck();
  const [selectedTransactions, setSelectedTransactions] = useSelectedTransactions();
  const [showMempoolModal, setShowMempoolModal] = useMempoolModal();
  const tableRef = useRef(null);
  // Run whenever new transactions have been added by users
  useEffect(() => {
    if (data !== undefined) {
      // Add the pubKey key/value to the transactions in the mempool
      data.bloxx_transaction.forEach(transaction => {
        transaction.pubKey = transaction.addressByInputaddress.nodePublicKey;
        const input = transaction.text === 'coinbase' ? '0' : transaction.inputAddress
        transaction.dataToCheck = {
          signedData: (input.concat(":".concat(transaction.outputAddress.concat(":".concat(transaction.value).concat(':'.concat(transaction.timestamp)))))),
          pubKey: transaction.pubKey,
          signature: transaction.signature,
          text: transaction.text
        }
      });
      // Filter out transactions that have been definitely assigned to a confirmed block
      const unconfirmedTransactions = data.bloxx_transaction.filter(transaction => transaction.blockHash === null && transaction.text !== "coinbase");
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
      tableRef.current.setRowSelection(unconfirmedSelectedTransactions)
    }
  }, [dataToShow])

  const columns = [
    {
      field: "dataToCheck",
      label: "Copy to Check",
      render: value => {
        return (
          <FaRegCopy onClick={() => setDataToCheck(value)} style={{ cursor: "pointer" }} />
        )
      }
    },
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

  const handleShowMempoolModal = () => {
    setShowMempoolModal(true)
  }

  return (
    <>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <Title icon={mempoolIcon} title="Mempool"></Title>
        {showMempoolModal == null &&
          <IconButton style={{ borderRadius: '0px' }} size='small' onClick={handleShowMempoolModal}>
            <OpenWithIcon />
          </IconButton>
        }
      </div>
      <Provider>
        <Box m={3}>
          {(data !== undefined && !loading) && (
            <Table ref={tableRef}
              columns={columns}
              data={dataToShow}
              // use TxHash for rowKey; because it is unique
              rowKey="txHash"
              onCheck={checkedItemsArray =>
                setSelectedTransactions(checkedItemsArray)
              }
            />
          )}
        </Box>
      </Provider>
    </>
  );
};

export default Mempool;