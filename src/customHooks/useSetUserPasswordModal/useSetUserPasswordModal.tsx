import { useState } from 'react';
import { createStore } from 'reusable';

const useSetUserPasswordModal = createStore(() => {
	const [showUserPasswordModal, setShowUserPasswordModal] = useState<boolean>(false);
	return [showUserPasswordModal, setShowUserPasswordModal];
});

export default useSetUserPasswordModal;
