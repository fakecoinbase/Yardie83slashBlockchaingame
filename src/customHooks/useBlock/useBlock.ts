import { useState } from 'react';
import { createStore } from 'reusable';

export interface Block {
	blockHash: string,
	blockNumber: number,
	blockStatus: string,
	createdAt?: Date,
	difficulty: number,
	merkleRoot: string,
	nonce: number,
	previousBlockHash: string,
	txHash: string,
	transactions?: Array<any>
}


const useBlock = createStore(() => {
	const [block, setBlock] = useState<Block>()
	return [
		block,
		setBlock
	];
});

export default useBlock;
