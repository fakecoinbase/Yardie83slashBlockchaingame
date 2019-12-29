import { useState } from 'react';
import { createStore } from 'reusable';

export interface DataToCheck {
	signedData: string,
	pubKey: string,
	signature: string
}


const useDataToCheck = createStore(() => {
	const [dataToCheck, setDataToCheck] = useState<DataToCheck>()
	return [
		dataToCheck,
		setDataToCheck
	];
});

export default useDataToCheck;
