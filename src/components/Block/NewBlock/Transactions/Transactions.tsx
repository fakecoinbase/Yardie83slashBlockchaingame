import React, { useEffect } from 'react';
import useBlock, { BlockType } from '../../../../customHooks/useBlock/useBlock';
import useSelectedTransactions from '../../../../customHooks/useSelectedTransactions/useSelectedlTransactions';
import { Table } from 'rendition';

const Transactions = () => { 
  const [block, setBlock]: [BlockType, React.Dispatch<React.SetStateAction<BlockType | undefined>>] = useBlock();

	const [selectedTransactions] = useSelectedTransactions();


	/**
	 * The block list of selected transaction is updated
	 * whenever the user selects transactions from the mempool
	 */
	useEffect(() => {
		const data = selectedTransactions.map(function(transaction: any) {
			return { txHash: transaction.txHash };
		});
		setBlock({ ...block, block_transactions: { data } });
  }, [selectedTransactions]);
  
  return (
      			<div style={{ minHeight: '250px' }}>
				<Table
					columns={[
						{
							field: 'txHash',
							label: 'Selected Transactions',
						},
					]}
					data={selectedTransactions}
					rowKey='txHash'
				/>
			</div>
  )
}

export default Transactions;