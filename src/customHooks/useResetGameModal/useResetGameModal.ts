import { useState } from 'react';
import { createStore } from 'reusable';

const useResetGameModal = createStore(() => {
	const [showResetGameModal, setShowResetGameModal] = useState<boolean>(false)
	return [
		showResetGameModal,
		setShowResetGameModal
	];
});

export default useResetGameModal;
