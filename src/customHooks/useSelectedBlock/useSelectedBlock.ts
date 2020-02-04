import { useState } from 'react';
import { createStore } from 'reusable';
import { BlockQuery } from "../../generated/graphql";


const useSelectedBlock = createStore(() => {
	const [selectedBlock, setSelectedBlock] = useState<BlockQuery>();

	return [
		selectedBlock,
		setSelectedBlock
	]
});



export default useSelectedBlock;
