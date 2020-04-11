import { useState } from 'react';
import { createStore } from 'reusable';

const useSelectedTransactions = createStore(() => {
	const [selectedMempoolTransactions, setSelectedMempoolTransactions] = useState([
	// 	{
	// 	input: '',
	// 	output: '',
	// 	amount: '',
	// 	pubkey: '',
	// 	signature: '',
	// 	text: '',
	// 	txHash: ''
	// }
])

	return [
		selectedMempoolTransactions,
		(checkedItemsArray: any) => {
			// we have to deep copy the checkedItemsArray, otherwise when we remove the excessive data it will delete it in the original (by reference)
			// array too. The simplest way to deep copy an array of objects is to stringify and immediately parse it to and from a JSON object
			var duplicate = JSON.parse(JSON.stringify(checkedItemsArray));
			// We have to delete the dataToCheck key/value that we added;
			// otherwise we get a graphql error in the block component. Not the best solution but it works
			duplicate.forEach((item: any) => {
				delete item.pubKey;
			});
			// limit entries to 4 transactions
			const clampedSelection = duplicate.splice(0, 3);
			setSelectedMempoolTransactions(clampedSelection)
		}
	]
});

export default useSelectedTransactions;
