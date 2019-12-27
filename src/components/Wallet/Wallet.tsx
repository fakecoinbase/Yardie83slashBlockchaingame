import React, { useState } from 'react';
import { } from './WalletStyles.js';
import { Heading, Divider } from 'rendition';
import { Button } from '@material-ui/core'
import Title from '../util/Title/Title'
import LabeledInput from '../util/LabeledInput/LabeledInput';
import useUserInfo from '../../customHooks/useUserInfo/useUserInfo';


const Wallet = () => {
	const [userInfo, setUserInfo] = useUserInfo();
	const [canBroadcast, setCanBroadcast] = useState(false)

	const copyTosign = () => { }
	const copyToHasher = () => { }
	const onBroadcast = () => { }
	
	
	const validate = () => { 
		return false;
	}



	const subTitle = (
		<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
			<span style={{ display: "inline-block", boxSizing: "border-box", width: "50%" }}>Balance: {userInfo.address.amount ? userInfo.address.amount : 0}</span>
		</div>
	)

	return (
		<>
			<Title title="Wallet" subTitle={subTitle}></Title>
			<div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
				<Heading.h6 style={{ fontFamily: 'Source Sans Pro', color: "#4D4F5C", paddingBottom: "5px" }}>My Address: {userInfo.address.id ? userInfo.address.id : ""}</Heading.h6>
				<Divider />
				<Heading.h6 style={{ fontFamily: 'Source Sans Pro', color: "#4D4F5C", paddingBottom: "5px" }}>Send Coins</Heading.h6>
				<LabeledInput label={"To"} placeholder={"Address"} />
				<LabeledInput label={"Amount"} placeholder={"Amount"} />
				<div style={{ paddingBottom: "20px" }}>
					<div style={{ float: "right", right: "0px", paddingRight: "10px" }}>
						<Button onClick={copyTosign} variant="contained" color="primary" size="small">Copy to Sign</Button>
					</div>
				</div>
				<div style={{ clear: "both", height: "10px" }} />
				<LabeledInput label={"Signature"} placeholder={"Signature"} />
				<div style={{ paddingBottom: "20px" }}>
					<div style={{ float: "right", right: "0px", paddingRight: "10px" }}>
						<Button onClick={copyToHasher} variant="contained" color="primary" size="small">Copy to Hasher</Button>
					</div>
				</div>
				<div style={{ clear: "both", height: "10px" }} />
				<LabeledInput label={"Tx Hash"} placeholder={"Transaction Hash"} />
				<div style={{ float: "right", paddingBottom: "10px" }}>
					<div style={{ float: "right", paddingRight: "10px" }}>
						<Button onClick={onBroadcast} variant="contained" color="primary" disabled={canBroadcast} size="small">Broadcast</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Wallet;
