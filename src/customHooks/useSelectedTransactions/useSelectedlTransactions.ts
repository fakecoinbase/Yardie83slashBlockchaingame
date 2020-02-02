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
		(checkedItemsArray: any) => {
			// we have to deep copy the checkedItemsArray, otherwise when we remove the excessive data it will delete it in the original 
			// dataToShow array too. The simplest eay to deep copy an array of objects is to stringify and immediately parse it to and from a JSON object
			var duplicate = JSON.parse(JSON.stringify(checkedItemsArray));
			// We have to delete the dataToCheck and the pubKey key/value that we added on top;
			// otherwise we get a graphql error in the block component. Not the best solution but it works for now
			duplicate.forEach((item: any) => {
				delete item.pubKey;
				delete item.dataToCheck;
			});
			// limit entries to four
			const limitedSelection = duplicate.splice(0, 4);
			setSelectedMempoolTransactions(limitedSelection)
		}
	]
});

export default useSelectedTransactions;
