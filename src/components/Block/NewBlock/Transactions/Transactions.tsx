import React, { useEffect, useState } from 'react';
import { Table } from 'rendition';
import useBlock, { BlockType } from '../../../../customHooks/useBlock/useBlock';
import useSelectedTransactions from '../../../../customHooks/useSelectedTransactions';
import useNextCoinbaseTransaction from '../../../../customHooks/useNextCoinbaseTransaction';
import useUserInfo, { UserType } from '../../../../customHooks/useUserInfo';
import { sign } from '../../../../services/signatureService';
import hash from '../../../../services/hasherService';
import {
	useInsertTransactionMutation,
	useOnNewTransactionAddedSubscription,
	useAdminNodeQuery,
	useOnNewNodeAddedSubscription,
} from '../../../../generated/graphql';

type Transaction = {
	inputAddress: string | null;
	outputAddress: string;
	value: string;
	signature: string;
	timestamp: string;
	text: string;
	txHash: string;
};

const Transactions = () => {
	const [userInfo]: [UserType] = useUserInfo();
	const [selectedTransactions]: [[Transaction]] = useSelectedTransactions();
	const { data: onNewTransactionAddedData } = useOnNewTransactionAddedSubscription();
	const [insertTransactionMutation] = useInsertTransactionMutation();
	const [transactionsToShow, setTransactionsToShow] = useState<
		{
			txHash: string;
		}[]
	>([{ txHash: '' }]);
	const [block, setBlock]: [BlockType, React.Dispatch<React.SetStateAction<BlockType | undefined>>] = useBlock();
	const { data: newNodeSubscriptionData } = useOnNewNodeAddedSubscription();
	const { data: adminNodeData, loading: loadingAdminNode } = useAdminNodeQuery();
	const [nextCoinbaseTransaction, setNextCoinbaseTransaction]: [
		{ txHash: string },
		React.Dispatch<React.SetStateAction<{ txHash: string }>>
	] = useNextCoinbaseTransaction();

	const insertNextCoinbaseTransaction = () => {
		const timestamp = ((Date.now() / 1000) | 0).toString();
		const blockReward: string = '20';
		const signature = sign(
			'0'.concat(':'.concat(userInfo.address.id.concat(':'.concat(blockReward.concat(':'.concat(timestamp)))))),
			userInfo.privateKey
		);
		const txHash = hash(userInfo.address.id.concat(':'.concat(blockReward.concat(':'.concat(signature)))));
		const coinbaseTransaction: Transaction = {
			inputAddress: adminNodeData!.bloxx_node[0].addresses[0].id,
			outputAddress: userInfo.address.id,
			value: blockReward,
			signature: signature,
			timestamp: timestamp,
			text: 'coinbase',
			txHash: txHash!,
		};
		insertTransactionMutation({
			variables: {
				inputAddress: coinbaseTransaction.inputAddress,
				outputAddress: coinbaseTransaction.outputAddress,
				value: parseInt(coinbaseTransaction.value),
				text: coinbaseTransaction.text,
				signature: coinbaseTransaction.signature,
				timestamp: timestamp,
				txHash: coinbaseTransaction.txHash,
			},
		});
		setNextCoinbaseTransaction({ txHash: txHash! });
	};

	/**
	 * We create a coinbase transaction when the component is first loaded and add it to the selectedTransactions Array
	 */
	useEffect(() => {
		if (onNewTransactionAddedData !== undefined && adminNodeData !== undefined) {
			if (nextCoinbaseTransaction === undefined) {
				insertNextCoinbaseTransaction();
			}
		}
	}, [onNewTransactionAddedData, adminNodeData, loadingAdminNode, newNodeSubscriptionData, nextCoinbaseTransaction]);

	useEffect(() => {
		if (nextCoinbaseTransaction !== undefined && nextCoinbaseTransaction !== null) {
			console.log('Transaction To Show', transactionsToShow);
			console.log('nextCoinbaseTransaction', nextCoinbaseTransaction);
			const isCoinbaseTxInList = transactionsToShow.some(
				(transaction) => transaction.txHash === nextCoinbaseTransaction.txHash
			);
			if (!isCoinbaseTxInList && nextCoinbaseTransaction !== undefined) {
				const coinbaseTransaction = transactionsToShow.concat(nextCoinbaseTransaction);
				setTransactionsToShow(coinbaseTransaction!);
				setBlock({ ...block, block_transactions: { data: coinbaseTransaction } });
			}
		}
	}, [nextCoinbaseTransaction]);

	useEffect(() => {
		if (nextCoinbaseTransaction !== undefined) setTransactionsToShow([nextCoinbaseTransaction]);
	}, [nextCoinbaseTransaction]);

	/**
	 * The block list of selected transaction is updated
	 * whenever the user selects transactions from the mempool
	 */

	useEffect(() => {
		const selectedTxHashes = selectedTransactions.map(function(transaction: Transaction) {
			return { txHash: transaction.txHash };
		});
		const _transactionsToShow = [nextCoinbaseTransaction].concat(selectedTxHashes);
		if (!_transactionsToShow.some((e) => e === undefined)) {
			setTransactionsToShow(_transactionsToShow);
		}
		setBlock({ ...block, block_transactions: { data: _transactionsToShow } });
	}, [selectedTransactions]);

	return (
		<div style={{ minHeight: '250px' }}>
			<Table
				columns={[
					{
						field: 'txHash',
						label: 'Selected Transactions',
					},
				]}
				data={transactionsToShow}
				rowKey='txHash'
			/>
		</div>
	);
};

export default Transactions;
