import { useState } from 'react';
import { createStore } from 'reusable';

const useAdminModal = createStore(() => {
	const [showAdminModal, setShowAdminModal] = useState<boolean>(false)
	return [
		showAdminModal,
		setShowAdminModal
	];
});

export default useAdminModal;
