import React from 'react';
import { } from './BlockchainStyles.js';
import Title from '../util/Title/Title'


const Blockchain = () => {
	// const [hook, setHook] = useState(hook);

	const subTitle =  (
		<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
		<span style={{ display: "inline-block", boxSizing: "border-box", width: "33%" }}>Blockchain</span>
		<span style={{ display: "inline-block", boxSizing: "border-box", width: "33%" }}>Longest chain: 6 </span>
		<span style={{ display: "inline-block", boxSizing: "border-box", width: "33%" }}>Difficulty: 0</span>
	</div>
	)

	return (
		<>
			<Title subTitle={subTitle} />
		</>
	);
};

export default Blockchain;
