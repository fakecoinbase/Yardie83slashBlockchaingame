import React from 'react'
import { } from './BlockStyles.js'
import { Button } from '@material-ui/core'
import Title from '../util/Title/Title'
import LabeledInput from '../util/LabeledInput';

const Block = () => {
	return (
		<>
			<Title title="Block" subTitle="Block Header"></Title>
			<div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
				<LabeledInput label={"Block#"} />
				<LabeledInput label={"Previous Block"} />
				<LabeledInput label={"Merkle Root"} />
				<LabeledInput label={"Timestamp"} />
				<LabeledInput label={"Difficulty"} />
				<LabeledInput label={"Coinbase Tx"} />
				<LabeledInput label={"Nonce"} />
				<div style={{ display: "flex", justifyContent: "right", paddingBottom: "10px", paddingTop: "10px" }}>
					<Button variant="contained" color="primary">Generate Nonce</Button>
				</div>
				<LabeledInput label={"Block Hash"}/>
				<Title subTitle="Transactions"></Title>
			</div>
		</>
	);
};

export default Block;
