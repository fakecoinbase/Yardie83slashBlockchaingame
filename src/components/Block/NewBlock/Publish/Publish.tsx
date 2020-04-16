import React, { useState, useEffect } from 'react';
import {} from './PublishStyles.js';
import { Button } from '@material-ui/core';
import { Alert, Box } from 'rendition';
import Title from '../../../util/Title/Title';
import useBlock, { BlockType } from '../../../../customHooks/useBlock';
import useSelectedTransactions from '../../../../customHooks/useSelectedTransactions';
import { useInsertBlockMutation } from '../../../../generated/graphql';
import useTimer from '../../../../customHooks/useTimer/useTimer';
import useNextCoinbaseTransaction from '../../../../customHooks/useNextCoinbaseTransaction';

const Publish = () => {
	const [block, , resetBlock]: [
		BlockType,
		React.Dispatch<React.SetStateAction<BlockType | undefined>>,
		() => void
	] = useBlock();
	const [, setSelectedTransactions] = useSelectedTransactions();
	const [insertBlock] = useInsertBlockMutation();
	const [, setIsTimerActive]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useTimer();
	const [toast, setToast] = useState<React.ReactNode | null>();
	const [, setNextCoinbaseTransaction] = useNextCoinbaseTransaction();

	useEffect(() => {
		let interval = setInterval(() => {}, 10000);
		if (toast) {
			interval = setInterval(() => {
				setToast(false);
			}, 2000);
		}
		return () => clearInterval(interval);
	}, [toast]);

	const onPublish = () => {
		insertBlock({
			variables: {
				blockHash: block.blockHash,
				blockNumber: block.blockNumber,
				blockStatus: block.blockStatus,
				createdAt: block.timestamp!.toString(),
				difficulty: block.difficulty,
				merkleRoot: block.merkleRoot,
				nonce: block.nonce,
				previousBlockHash: block.previousBlockHash,
				block_transactions: block.block_transactions
			}
		})
			.then(
				success => {
					setToast(
						<Alert success emphasized style={{ width: '350px' }} onDismiss={() => setToast(null)}>
							Block published
						</Alert>
					);
					setIsTimerActive(true);
					resetBlock();
					setSelectedTransactions([]);
					setNextCoinbaseTransaction();
				},
				rejected => {
					setToast(
						<Alert warning style={{ width: '350px' }} emphasized onDismiss={() => setToast(null)}>
							Check the block data again
						</Alert>
					);
				}
			)
			.catch(error => {
				setToast(
					<Alert danger emphasized prefix={false} style={{ width: '350px' }} onDismiss={() => setToast(null)}>
						Could not publish block
					</Alert>
				);
			});
	};
	return (
		<>
			<Title subTitle='Publish Block' />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					paddingBottom: '10px',
					paddingTop: '10px'
				}}>
				<div
					style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					{!toast && (
						<Button style={{ width: '160px' }} variant='contained' color='primary' onClick={onPublish}>
							Publish
						</Button>
					)}
					{toast && <Box m={0}>{toast}</Box>}
				</div>
			</div>
		</>
	);
};

export default Publish;
