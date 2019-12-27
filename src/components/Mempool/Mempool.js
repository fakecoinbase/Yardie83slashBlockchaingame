import React from 'react'
import { } from './MempoolStyles.js'
import { Provider, Box, Table, } from 'rendition'
import Title from '../util/Title/Title'
import useSelectedTransactions from '../../customHooks/useSelectedTransactions/useSelectedlTransactions';

const Mempool = () => {

	const [, setSelectedTransaction] = useSelectedTransactions();

	const data = [
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ct3g34c4n6767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43dfctgg3gc4n6767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ct3gsscjgf4n6767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ct3ghkjttc4n6767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ctjih3gc4nlo767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ct3gc4n6kihg7zgfd67'
		}
	]

	const columns = [
		{
			field: 'input',
			label: 'Input Address'
		},
		{
			field: 'output',
			label: 'Output Address'
		},
		{
			field: 'amount',
			label: 'Amount',
			render: value => <code>{value}</code>
		},
		{
			field: 'pubkey', label: "Public Key",
			render: value => {
				// shorten value to fit column width, then
				const newValue = value
				return (
					// newValue
					newValue
				)
			}
		},
		{
			field: 'signature',
			label: 'SIG(Tx)',
			render: value => {
				// shorten value to fit column width, then
				const newValue = value
				return (
					// newValue
					newValue
				)
			}
		},
		{
			field: 'txHash',
			label: 'Tx Hash',
			render: value => {
				// shorten value to fit column width, then
				const newValue = value
				return (
					// newValue
					newValue
				)
			}
		}
	]

	return (
		<>
			<Title title="Mempool"></Title>
			<Provider>
				<Box m={3}>
					<Table
						columns={columns}
						data={data}
						// use TxHash for rowKey; because unique
						rowKey='txHash'
						onCheck={(checkedItemsArray) =>
							setSelectedTransaction(checkedItemsArray)
						}
					/>
				</Box>
			</Provider>
		</>
	);
};

export default Mempool;
