import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { SelectedBlock } from '../CheckBlock';
import LabeledInput from '../../../util/LabeledInput/LabeledInput';
import hash from '../../../../services/hasherService';
import { Input } from 'rendition';

interface Props {
	blockInfo: SelectedBlock;
}

const CheckHeader = ({ blockInfo }: Props) => {
	const [resultText, setResultText] = useState('');
	const [blockHashResult, setBlockHashResult] = useState<string | undefined>(undefined);
	const [isBlockHashValid, setIsBlockHashValid] = useState<boolean | undefined>(undefined);

	const checkHeader = () => {
		let blockData =
			blockInfo.blockNumber +
			':' +
			blockInfo.previousBlockHash +
			':' +
			blockInfo.merklRoot +
			':' +
			blockInfo.timestamp! +
			':' +
			blockInfo.difficulty +
			':' +
			blockInfo.nonce;
		console.log('CheckHeader');
		console.log(blockData);
		let hashResult = hash(blockData);
		setBlockHashResult(hashResult);
	};

	useEffect(() => {
		setResultText('');
		setBlockHashResult(undefined);
		setIsBlockHashValid(undefined);
	}, [blockInfo]);

	useEffect(() => {
		if (blockHashResult !== undefined) {
			if (blockHashResult === blockInfo.blockHash) {
				setResultText('Block Hash matches');
				setIsBlockHashValid(true);
			}
			if (blockHashResult !== blockInfo.blockHash) {
				setResultText('Block Hash does not match');
				setIsBlockHashValid(false);
			}
		}
	}, [blockHashResult]);

	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'flex-end',
				width: '100%',
				paddingBottom: '10px',
				// paddingTop: '10px',
			}}>
			<div style={{ display: 'inline-block', boxSizing: 'border-box', width: '30%' }}>
				<Button variant='contained' color='primary' size='small' onClick={checkHeader}>
					Check Header
				</Button>
			</div>
			<div style={{ display: 'inline-block', boxSizing: 'border-box', width: '70%' }}>
				<Input
					readOnly
					value={resultText}
					style={{
						height: '30px',
						borderColor: isBlockHashValid !== undefined ? (isBlockHashValid ? 'green' : 'red') : '',
					}}
				/>
			</div>
		</div>
	);
};

export default CheckHeader;
