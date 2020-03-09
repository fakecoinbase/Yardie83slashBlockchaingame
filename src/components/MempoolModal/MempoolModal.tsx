import React from 'react';
import { Modal } from 'rendition';
import useMempoolModal from '../../customHooks/useMempoolModal';
import Mempool from '../Mempool/Mempool';

const MempoolModal = () => {
	const [, setShowMempoolModal] = useMempoolModal();
	return (
		<Modal
			done={() => setShowMempoolModal(null)}
			style={{
				height: '70vh',
				width: '70vw',
				// backgroundColor: 'lightGrey',
				paddingLeft: '0px',
				// paddingRight: '5px',
				paddingTop: '0px',
			}}>
			<Mempool />
		</Modal>
	);
};

export default MempoolModal;
