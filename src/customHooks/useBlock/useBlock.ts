import { useState } from 'react';
import { createStore } from 'reusable';

export interface Block {
	blockHash: string,
	blockNumber: number,
	blockStatus: string,
	timestamp?: Date,
	difficulty: number,
	merkleRoot: string,
	nonce: number,
	previousBlockHash: string,
	txHash: string,
	transactions?: Array<any>
}


const useBlock = createStore<(Block | React.Dispatch<React.SetStateAction<Block | undefined>> | undefined)[]>(() => {
	const [block, setBlock] = useState<Block>()
	return [
		block,
		setBlock
	];
});

export default useBlock;
