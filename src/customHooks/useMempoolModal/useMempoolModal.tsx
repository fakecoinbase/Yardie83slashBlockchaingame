import { useState } from 'react';
import { createStore } from 'reusable';

const useMempoolModal = createStore(() => {
	const [showMempoolModal, setShowMempoolModal] = useState<Boolean | null>(null);
	return [showMempoolModal, setShowMempoolModal];
});

export default useMempoolModal;
