import React from 'react';
import Publish from './Publish';
import Header from './Header';
import Transactions from './Transactions';

const Block = () => {
	return (
		<>
			<Header />
			<Transactions />
			<Publish />
		</>
	);
};

export default Block;
