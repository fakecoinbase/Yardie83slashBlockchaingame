import { useState } from 'react';
import { createStore } from 'reusable';

const useDataToHash = createStore(() => {
	const [dataToHash, setDataToHash] = useState<string>()
	return [
		dataToHash,
		setDataToHash
	];
});

export default useDataToHash;
