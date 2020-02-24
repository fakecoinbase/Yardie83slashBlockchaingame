import React from 'react';
import { Modal } from 'rendition';
import useBlockchainModal from '../../customHooks/useBlockchainModal/useBlockchainModal';
import Tree from 'react-d3-tree';

const BlockchainModal = () => {
	const [blockchainModal, setShowBlockchainModal] = useBlockchainModal();
	return (
		<Modal
			done={() => setShowBlockchainModal(null)}
			style={{
				height: '70vh',
				width: '70vw',
				// backgroundColor: 'lightGrey',
				paddingLeft: '0px',
				// paddingRight: '5px',
				paddingTop: '0px',
			}}>
			<div style={{ height: '85%'}}>
				<Tree
					data={blockchainModal.data}
					collapsible={blockchainModal.collapsible}
					pathFunc={blockchainModal.pathFunc}
					translate={blockchainModal.translate}
					scaleExtent={blockchainModal.scaleExtent}
					nodeSize={blockchainModal.nodeSize}
				/>
			</div>
		</Modal>
	);
};

export default BlockchainModal;
