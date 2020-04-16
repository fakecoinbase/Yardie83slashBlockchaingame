import React, { useState, useEffect } from 'react';
import { Heading } from 'rendition';
import { Button } from '@material-ui/core';
import Title from '../util/Title/Title';
import LabeledInput from '../util/LabeledInput/LabeledInput';
import useUserInfo, { UserType } from '../../customHooks/useUserInfo/useUserInfo';
import { useInsertTransactionMutation, useAddressSubscription } from '../../generated/graphql';
import useDataToSign from '../../customHooks/useDataToSign';
import useDataToHash from '../../customHooks/useDataToHash';

const Wallet = () => {
	const [userInfo, setUserInfo]: [UserType, React.Dispatch<React.SetStateAction<UserType>>] = useUserInfo();
	const { data } = useAddressSubscription();
	const [canBroadcast, setCanBroadcast] = useState(false);
	const [fields, setFields] = useState({ to: '', amount: '', signature: '', txHash: '' });
	const [timestamp, setTimestamp] = useState<string>('');
	const [timer, setTimer] = useState<string>('');
	const [insertTransactionMutation] = useInsertTransactionMutation();
	const [, setDataToSign]: [string, React.Dispatch<React.SetStateAction<string>>] = useDataToSign();
	const [, setDataToHash]: [string, React.Dispatch<React.SetStateAction<string>>] = useDataToHash();

	useEffect(() => {
		let currentUser = undefined;
		if (data) {
			currentUser = data!.bloxx_address.find(address => address.id === userInfo.address.id);
		}
		if (currentUser) {
			const amount = currentUser!.balance!;
			setUserInfo({ ...userInfo, address: { id: userInfo.address.id, amount } });
		}
	}, [data]);

	const copyToSign = () => {
		if (fields !== undefined) {
			const time = ((Date.now() / 1000) | 0).toString();
			setTimestamp(time);
			setDataToSign(
				userInfo.address.id.concat(':'.concat(fields.to.concat(':'.concat(fields.amount.concat(':'.concat(time))))))
			);
		}
	};

	const copyToHasher = () => {
		if (fields !== undefined)
			setDataToHash(fields.to.concat(':'.concat(fields.amount.concat(':'.concat(fields.signature)))));
	};

	const onChange = (key: string, value: string) => {
		setFields({ ...fields, [key]: value });
	};

	useEffect(() => {
		const errors = validate(fields.to, parseInt(fields.amount), fields.signature, fields.txHash);
		const isDisabled = Object.keys(errors).some((value, index, array) => errors[index]);
		setCanBroadcast(!isDisabled);
	}, [fields]);

	const onBroadcast = () => {
		insertTransactionMutation({
			variables: {
				inputAddress: userInfo.address.id,
				outputAddress: fields.to,
				value: parseInt(fields.amount),
				signature: fields.signature,
				txHash: fields.txHash,
				timestamp: timestamp
			}
		})
			.then(clear)
			.catch(error => {
				console.debug(error);
			});
	};

	const clear = () => {
		setFields({ to: '', amount: '', signature: '', txHash: '' });
		setTimestamp('');
	};

	//TODO Improve validation to check for right input format.
	// If any of the returned values is true, then we can not broadcast
	const validate = (to: string, amount: number, signature: string, txHash: string) => {
		return [to.length === 0, isNaN(amount), signature.length === 0, txHash.length === 0];
	};

	const subTitle = (
		<div style={{ margin: 'auto', width: '100%', paddingBottom: '10px' }}>
			<span style={{ display: 'inline-block', boxSizing: 'border-box', width: '50%' }}>
				Balance: {userInfo.address.amount ? userInfo.address.amount : 0}
			</span>
		</div>
	);

	useEffect(() => {
		setInterval(() => {
			setTimer(((Date.now() / 1000) | 0).toString());
		}, 1000);
	}, [setTimer]);

	return (
		<>
			<Title title='Wallet' subTitle={subTitle}></Title>
			<div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
				<Heading.h6 style={{ fontFamily: 'Source Sans Pro', color: '#4D4F5C', paddingTop: '5px' }}>
					Send Coins:
				</Heading.h6>
				<LabeledInput placeholder={'To Address'} onChange={e => onChange('to', e.target.value)} value={fields.to} />
				<LabeledInput placeholder={'Amount'} onChange={e => onChange('amount', e.target.value)} value={fields.amount} />
				<LabeledInput placeholder={timer} readOnly value={timestamp} />
				<div style={{ paddingBottom: '20px' }}>
					<Button onClick={copyToSign} variant='contained' color='primary' size='small' style={{ width: '100%' }}>
						Copy to Sign
					</Button>
				</div>
				<div style={{ clear: 'both', height: '10px' }} />
				<LabeledInput
					placeholder={'Signature'}
					onChange={e => onChange('signature', e.target.value)}
					value={fields.signature}
				/>
				<div style={{ paddingBottom: '20px' }}>
					<Button onClick={copyToHasher} variant='contained' color='primary' size='small' style={{ width: '100%' }}>
						Copy to Hasher
					</Button>
				</div>
				<div style={{ clear: 'both', height: '10px' }} />
				<LabeledInput
					placeholder={'Transaction Hash'}
					onChange={e => onChange('txHash', e.target.value)}
					value={fields.txHash}
				/>

				<Button
					onClick={onBroadcast}
					variant='contained'
					color='primary'
					disabled={!canBroadcast}
					size='small'
					style={{ width: '100%' }}>
					Broadcast
				</Button>
				<div style={{ paddingTop: '20px', float: 'right' }}>
					<Button onClick={clear} variant='contained' color='default' size='small' style={{ width: '30%' }}>
						Clear
					</Button>
				</div>
			</div>
		</>
	);
};

export default Wallet;
