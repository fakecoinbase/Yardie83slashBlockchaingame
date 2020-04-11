import React, { useState, useEffect, useRef } from 'react';
import { useOnBlockAddedSubscription } from '../../../../generated/graphql';
import { Button } from '@material-ui/core';
import Title from '../../../util/Title/Title';
import LabeledInput from '../../../util/LabeledInput/LabeledInput';
import useDataToHash from '../../../../customHooks/useDataToHash';
import miningService from '../../../../services/miningService';
import useTimer from '../../../../customHooks/useTimer';
import useBlock, { BlockType } from '../../../../customHooks/useBlock';

const Header = () => {
	const [block, setBlock]: [BlockType, React.Dispatch<React.SetStateAction<BlockType | undefined>>] = useBlock();
	const { data } = useOnBlockAddedSubscription();
	const [blockNumber, setBlockNumber] = useState<string>('-');
	const [blockNumberOptions, setBlockNumberOptions] = useState<string[]>();
	const [previousBlockHash, setPreviousBlockHashblockNumber] = useState<string>('-');
	const [previousBlockHashOptions, setPreviousBlockHashOptions] = useState<
		{ blockNumber: string; blockHash: string }[]
	>();
	const [timestamp, setTimestamp] = useState<number | undefined>(undefined);
	const [isTimerActive, setIsTimerActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useTimer();
	const [nonce, setNonce] = useState(0);
	const [clickCount, setClickCount] = useState(0);
	const [, setDataToHash] = useDataToHash();
	const [difficulty] = useState(1);

	useEffect(() => {
		if (data !== undefined) {
			setBlockNumberOptions(Array.from(new Set(data!.bloxx_block.map((block) => (block.blockNumber + 1).toString()))));
			const prevBlockOptions = data!.bloxx_block.map((block) => ({
				blockNumber: block.blockNumber.toString()!,
				blockHash: block.blockHash!,
			}));
			setPreviousBlockHashOptions(prevBlockOptions);
			setBlock({ ...block});
		}
	}, [data]);

	/**
	 * On change of the input fields we update the block state
	 * @param key
	 * @param value
	 */
	const onChange = (key: string, value: any) => {
		setBlock({ ...block, timestamp, difficulty, blockStatus: 'unconfirmed', [key]: value });
	};

	/**
	 * The timer for the block timestamp. It is active until the
	 * user clicks copy to hasher for the first time and restarts
	 * when the block has been successfully published
	 */
	useEffect(() => {
		let interval = setInterval(() => {}, 1000);
		if (isTimerActive) {
			if (timestampRef.current !== 0) timestampRef.current = 0;
			interval = setInterval(() => {
				setTimestamp((Date.now() / 1000) | 0);
			}, 1000);
		} else if (!isTimerActive) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isTimerActive, setTimestamp]);

	const timestampRef = useRef<number>(0);
	/**
	 * Called when the user clicks copy to hasher.
	 * The hasher hashes any type of data, so we decided arbitrarily
	 * on the ":" as the delimiter for the various data fields
	 */
	//TODO validate user data
	const onCopyToHasher = () => {
		setIsTimerActive(false);
		setClickCount(() => (clickCount === 3 ? 3 : clickCount + 1));
		if (timestampRef.current === 0) {
			timestampRef.current = (Date.now() / 1000) | 0;
			setTimestamp(timestampRef.current);
			setBlock({ ...block, timestamp: timestampRef.current });
		}
		let blockData =
			blockNumber +
			':' +
			previousBlockHash +
			':' +
			block.merkleRoot +
			':' +
			block.difficulty +
			':' +
			timestampRef.current +
			':' +
			nonce;
		setDataToHash(blockData);
	};

	/**
	 * Automatically solves the nonce for the user. The user can
	 * use this function after a certain amount of manual tries.
	 */
	const onSolveNonce = () => {
		setIsTimerActive(false);
		const nonce = miningService(block)!;
		setNonce(nonce);
		setBlock({ ...block, nonce });
		setClickCount(0);
	};

	return (
		<>
			<Title subTitle='Block Header' />
			<div style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '10px' }}>
				<LabeledInput
					label={'Block#'}
					options={
						blockNumberOptions &&
						blockNumberOptions!.sort((a, b) => {
							return parseInt(a) - parseInt(b);
						})
					}
					value={blockNumber}
					onChange={({ option }) => {
						setPreviousBlockHashblockNumber('-');
						setBlockNumber(option);
						onChange('blockNumber', parseInt(option));
					}}
				/>
				<LabeledInput
					label={'Previous Blockhash'}
					options={
						previousBlockHashOptions &&
						previousBlockHashOptions
							.filter((option) => parseInt(option.blockNumber) === parseInt(blockNumber) - 1)
							.map((option) => option.blockHash)
					}
					value={previousBlockHash}
					onChange={({ option }) => {
						setPreviousBlockHashblockNumber(option);
						onChange('previousBlockHash', option);
					}}
				/>
				<LabeledInput label={'Merkle Root'} onChange={(e) => onChange('merkleRoot', e.target.value)} />

				<LabeledInput
					label={'Difficulty'}
					readOnly
					value={difficulty}
					onChange={(e) => onChange('difficulty', e.target.value)}
				/>
				<LabeledInput
					label={'Timestamp'}
					readOnly
					value={timestamp}
					onChange={(e) => onChange('timestamp', timestamp)}
				/>
				<LabeledInput
					label={'Nonce'}
					onChange={(e) => {
						setNonce(parseInt(e.target.value));
						onChange('nonce', parseInt(e.target.value));
					}}
					value={isNaN(nonce) ? 0 : nonce}
				/>
				<div
					style={{
						display: 'flex',
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'flex-end',
						paddingBottom: '10px',
						paddingTop: '10px',
					}}>
					<Button
						variant='contained'
						size='small'
						color='primary'
						onClick={onCopyToHasher}
						style={{ marginRight: '10px' }}>
						Copy to Hasher
					</Button>
					<Button variant='contained' disabled={clickCount !== 3} color='primary' size='small' onClick={onSolveNonce}>
						Solve Nonce
					</Button>
				</div>
				<LabeledInput label={'Block Hash'} onChange={(e) => onChange('blockHash', e.target.value)} />
			</div>
		</>
	);
};

export default Header;
