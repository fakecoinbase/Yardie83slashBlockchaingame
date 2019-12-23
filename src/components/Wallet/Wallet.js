import React from 'react';
import { } from './WalletStyles.js';
import { Heading, Divider } from 'rendition';
import { Button } from '@material-ui/core'
import Title from '../util/Title/Title'
import LabeledInput from '../util/LabeledInput';


const Wallet = (props) => {

	const onCopy = () => {}
	const onSend = () => {}

	const subTitle = (
		<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
			<span style={{ display: "inline-block", boxSizing: "border-box", width: "50%" }}>Balance: 10</span>
		</div>
	)

	return (
		<>
			<Title title="Wallet" subTitle={subTitle}></Title>
			<div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
				<Heading.h6 style={{ fontFamily: 'Source Sans Pro', color: "#4D4F5C", paddingBottom: "5px" }}>My Address: vrkefwlk34ksac</Heading.h6>
				<Divider />
				<Heading.h6 style={{ fontFamily: 'Source Sans Pro', color: "#4D4F5C", paddingBottom: "5px" }}>Send Coins</Heading.h6>
				<LabeledInput label={"To"} placeholder={"Address"}/>
				<LabeledInput label={"Amount"} placeholder={"Amount"}/>
				<div style={{ float: "right", paddingBottom: "10px" }}>
					<div style={{ float: "right", paddingRight: "10px" }}>
						<Button onClick={onCopy} variant="contained" color="primary" size="small">Copy to Hasher</Button>
					</div>
				</div>				
				<div style={{ float: "right", paddingBottom: "10px" }}>
					<div style={{ float: "right", paddingRight: "10px" }}>
						<Button onClick={onSend} variant="contained" color="primary" size="small">Broadcast</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Wallet;
