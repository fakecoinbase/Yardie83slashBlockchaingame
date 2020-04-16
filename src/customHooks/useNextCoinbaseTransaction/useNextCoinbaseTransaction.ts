import { useState } from 'react';
import { createStore } from 'reusable';

const useNextCoinbaseTransaction = createStore(() => {
    const [nextCoinbaseTransaction, setNextCoinbaseTransaction] = useState<{ txHash: string } | null>();
    return [nextCoinbaseTransaction, setNextCoinbaseTransaction]
});

export default useNextCoinbaseTransaction