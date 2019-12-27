import { useState } from 'react';
import { createStore } from 'reusable';

const useSelectedTransactions = createStore(() => {
	const [selectedMempoolTransactions, setSelectedMempoolTransactions] = useState([{
		input: '',
		output: '',
		amount: '',
		pubkey: '',
		signature: '',
		text: '',
		txHash: ''
	}])

	return [
		selectedMempoolTransactions,
		(checkedItemsArray) => setSelectedMempoolTransactions(checkedItemsArray)
	]
});

export default useSelectedTransactions;