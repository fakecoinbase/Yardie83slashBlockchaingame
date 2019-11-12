import React, { useState, useEffect } from 'react';
import { } from './WalletStyles.js';
import { Input, Txt, Heading, Divider } from 'rendition';
import { Button } from '@material-ui/core'
import Title from '../util/Title/Title'
import LabeledInput from '../util/LabeledInput';


const Wallet = (props) => {

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
				<div style={{ display: "flex", justifyContent: "right", paddingBottom: "10px", paddingTop: "10px" }}>
					<Button variant="contained" color="primary" size="small">Send</Button>
				</div>
			</div>
		</>
	);
};

export default Wallet;
