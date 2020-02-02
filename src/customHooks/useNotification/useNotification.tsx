import { useState } from 'react';
import { createStore } from 'reusable';

const useNotification =  createStore(() => {
	const [notification, setNotification] = useState<string>()
	return [
		notification,
		setNotification
	];
});

export default useNotification;
