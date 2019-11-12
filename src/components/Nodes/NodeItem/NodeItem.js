import React from 'react';
import { } from './NodeItemStyles.js';
import { Divider, TextWithCopy } from 'rendition';

const NodeItem = ({ node }) => {
	const { name, address, pubKey } = node;
	return (
		// Style Container
		<div style={{ paddingLeft: "10px" }}>
			{/* Nodename */}
			<span style={{ fontFamily: 'Roboto', color: "#4D4F5C" }}>{name}</span>
			{/* Node Address */}
			<div style={{ margin: "auto", width: "100%", fontFamily: 'Roboto' }}>
				<span style={{ color: "#4D4F5C", display: "inline-block", boxSizing: "border-box", width: "50%" }}>Address: </span>
				<TextWithCopy copy={address} style={{ display: "inline-block", boxSizing: "border-box", width: "50%" }}>{address}</TextWithCopy>
			</div>
			{/* Node Pubkey */}
			<div style={{ margin: "auto", width: "100%", fontFamily: 'Source Sans Pro' }}>
				<span style={{ color: "#4D4F5C", display: "inline-block", boxSizing: "border-box", width: "50%" }}>PubKey: </span>
				<TextWithCopy copy={pubKey} style={{ display: "inline-block", boxSizing: "border-box", width: "50%" }}>{pubKey}</TextWithCopy>
			</div>
			<Divider />
		</div>
	)
}

export default NodeItem;
