import React, { useEffect, useState } from 'react';
import { Table } from 'rendition';
import useBlock, { BlockType } from '../../../../customHooks/useBlock/useBlock';
import useSelectedTransactions from '../../../../customHooks/useSelectedTransactions';
import useUserInfo, { UserType } from '../../../../customHooks/useUserInfo/useUserInfo';
import hash from '../../../../services/hasherService';
import {
	useInsertTransactionMutation,
	useOnNewTransactionAddedSubscription,
	useAdminNodeQuery,
} from '../../../../generated/graphql';

type Transaction = {
	inputAddress: string | null;
	outputAddress: string;
	value: string;
	signature: string;
	txHash: string;
};

const Transactions = () => {
	const [block, setBlock]: [BlockType, React.Dispatch<React.SetStateAction<BlockType | undefined>>] = useBlock();
	const [selectedTransactions, setSelectedTransactions]: [
		[Transaction],
		(transactions: any) => void
	] = useSelectedTransactions();
	const [userInfo]: [UserType] = useUserInfo();
	const { data, loading } = useOnNewTransactionAddedSubscription();
	const [insertTransactionMutation] = useInsertTransactionMutation();
	const [transactionsToShow, setTransactionsToShow] = useState<
		{
			txHash: string;
		}[]
	>([]);

	const { data: adminNodeData, loading: loadingAdminNode } = useAdminNodeQuery();

	/**
	 * We create a coinbase transaction when the component is first loaded and add it to the selectedTransactions Array
	 */
	useEffect(() => {
		if (data !== undefined && adminNodeData !== undefined) {
			console.log(data.bloxx_transaction);
			const existingCoinbaseTransaction = data.bloxx_transaction.filter(
				(transaction) =>
					transaction.inputAddress === adminNodeData.bloxx_node[0].addresses[0].id &&
					transaction.outputAddress === userInfo.address.id &&
					transaction.blockHash === null
			);
			console.log(existingCoinbaseTransaction);
			if (existingCoinbaseTransaction.length === 0) {
				const txHash = hash(
					userInfo.address.id.concat(':'.concat('20'.concat(':'.concat(((Date.now() / 1000) | 0).toString()))))
				)!.toString();

				const coinbaseTransaction: Transaction = {
					inputAddress: adminNodeData.bloxx_node[0].addresses[0].id,
					outputAddress: userInfo.address.id,
					value: '20',
					signature: 'coinbase',
					txHash: txHash,
				};

				insertTransactionMutation({
					variables: {
						inputAddress: coinbaseTransaction.inputAddress,
						outputAddress: coinbaseTransaction.outputAddress,
						value: parseInt(coinbaseTransaction.value),
						signature: coinbaseTransaction.signature,
						txHash: coinbaseTransaction.txHash,
					},
				});
			} else {
				if (!transactionsToShow.includes({ txHash: existingCoinbaseTransaction[0].txHash })) {
					const stx = transactionsToShow.concat({ txHash: existingCoinbaseTransaction[0].txHash });
					setTransactionsToShow(stx);
				}
			}
		}
	}, [data, adminNodeData]);

	/**
	 * The block list of selected transaction is updated
	 * whenever the user selects transactions from the mempool
	 */

	useEffect(() => {
		const block_transactions = selectedTransactions.map(function(transaction: Transaction) {
			return { txHash: transaction.txHash };
		});
		if (
			transactionsToShow.length > 0 &&
			!block_transactions.some((e) => e.txHash === transactionsToShow[transactionsToShow.length - 1].txHash)
		) {
			block_transactions.push({ txHash: transactionsToShow[transactionsToShow.length - 1].txHash });
		}
		setTransactionsToShow(block_transactions);
		setBlock({ ...block, block_transactions: { data: block_transactions } });
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
