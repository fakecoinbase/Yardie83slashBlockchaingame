import React, { useState, useEffect } from 'react';
import { } from './UnspentTxStyles.js';
import { Provider, Box, Table, } from 'rendition'
import Title from '../util/Title/Title'

const UnspentTx = () => {

	const prefixNum = num => (num.toString().length === 1 ? `0${num}` : num)

	const data = [
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ct3gc4n6767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43dfct3gc4n6767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ct3gcjgf4n6767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ct3gttc4n6767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ct3gc4nlo767'
		},
		{
			input: 'v43bc6543vr46',
			output: 'fwf3tgg4fgu64',
			amount: '2',
			pubkey: '1215sadv8s',
			signature: 'asg43vt5z332',
			text: 'Some text',
			txHash: '43ct3gc4n67zgfd67'
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
			field: 'text',
			label: 'Text',
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
			<Title title="Unspent Transactions (UTXO)"></Title>
			<Provider>
				<Box m={3}>
					<Table
						columns={columns}
						data={data}
					/>
				</Box>
			</Provider>
		</>
	);
};

export default UnspentTx;
