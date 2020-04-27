import React from 'react';
import { Tabs, Tab } from 'rendition';
import Title from '../util/Title/Title';
import CreateSignature from '../CreateSignature';
import CheckSignature from '../CheckSignature/CheckSignature';
import signatureIcon from '../../../src/assets/img/signature.svg'

const Signature = () => {
	return (
		<>
			<Title icon={signatureIcon} title='Signature' />
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
