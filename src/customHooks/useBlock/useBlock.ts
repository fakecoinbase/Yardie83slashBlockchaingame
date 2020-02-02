import { useState } from 'react';
import { createStore } from 'reusable';
import { Bloxx_Block_Transaction_Arr_Rel_Insert_Input  } from "../../generated/graphql";


export interface BlockType {
	blockHash: string,
	blockNumber: number | undefined,
	blockStatus: string,
	timestamp?: Date,
	difficulty: number | undefined,
	merkleRoot: string,
	nonce: number,
	previousBlockHash: string,
	txHash: string,
	block_transactions: Bloxx_Block_Transaction_Arr_Rel_Insert_Input
}


const useBlock = createStore<(BlockType | React.Dispatch<React.SetStateAction<BlockType>>)[]>(() => {
	const [block, setBlock] = useState<BlockType>({
		blockHash: "",
		blockNumber: undefined,
		blockStatus: "",
		timestamp: new Date(),
		difficulty: undefined,
		merkleRoot: "",
		nonce: 0,
		previousBlockHash: "",
		txHash: "",
		block_transactions: {data: []}
	})
	return [
		block,
		setBlock
	];
});

export default useBlock;
