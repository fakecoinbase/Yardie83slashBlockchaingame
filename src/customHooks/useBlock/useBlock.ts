import { useState } from 'react';
import { createStore } from 'reusable';
import {Bloxx_Transaction_Arr_Rel_Insert_Input} from '../../generated/graphql'

export interface BlockType {
	blockHash: string,
	blockNumber: number,
	blockStatus: string,
	timestamp?: Date,
	difficulty: number,
	merkleRoot: string,
	nonce: number,
	previousBlockHash: string,
	txHash: string,
	transactions?: Bloxx_Transaction_Arr_Rel_Insert_Input
}


const useBlock = createStore<(BlockType | React.Dispatch<React.SetStateAction<BlockType | undefined>> | undefined)[]>(() => {
	const [block, setBlock] = useState<BlockType>()
	return [
		block,
		setBlock
	];
});

export default useBlock;
