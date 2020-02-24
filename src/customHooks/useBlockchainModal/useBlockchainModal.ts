import { useState } from 'react';
import { createStore } from 'reusable';
import { ReactD3TreeItem } from 'react-d3-tree';

interface BlockchainTreeProps {
	data: ReactD3TreeItem[],
	collapsible: boolean,
	pathFunc: string,
	translate: { x: number, y: number },
	scaleExtent: { min: number, max: number },
	nodeSize: { x: number, y: number },
}

const useBlockchainModal = createStore(() => {
	const [showBlockchainModal, setShowBlockchainModal] = useState<BlockchainTreeProps | null>(null)
	return [
		showBlockchainModal,
		setShowBlockchainModal
	];
});

export default useBlockchainModal;
