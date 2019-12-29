import { useState } from 'react';
import { createStore } from 'reusable';

const useTimer = createStore(() => {
	const [isTimerActive, setIsTimerActive] = useState<boolean>(true)
	return [
		isTimerActive,
		setIsTimerActive
	];
});

export default useTimer;
