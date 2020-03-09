import React from 'react';
import { Tabs, Tab } from 'rendition';
import Title from '../util/Title/Title';
import CreateSignature from '../CreateSignature';
import CheckSignature from '../CheckSignature/CheckSignature';

const Signature = () => {
	return (
		<>
			<Title title='Signature' />
			<Tabs>
				<Tab title='Sign'>
					<CreateSignature />
				</Tab>
				<Tab title='Check'>
					<CheckSignature />
				</Tab>
			</Tabs>
		</>
	);
};

export default Signature;
