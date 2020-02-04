import { useState } from 'react';
import { createStore } from 'reusable';


const useDataToSign = createStore(() => {
	const [dataToSign, setDataToSign] = useState<string>()
	return [
		dataToSign,
		setDataToSign
	];
});

export default useDataToSign;
