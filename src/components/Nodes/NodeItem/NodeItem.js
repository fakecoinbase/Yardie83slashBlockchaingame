import React from 'react';
import { Styled } from './NodeItemStyles.js';
import { Divider, TextWithCopy } from 'rendition';

const NodeItem = ({ node }) => {
	const { name, address, pubKey } = node;
	return (
		// Style Container
		<Styled.Container>
			{/* Nodename */}
			<Styled.NodeName>{name}</Styled.NodeName>
			{/* Node Address */}
			<Styled.NodeAddress>
				<span style={{ color: "#4D4F5C", display: "inline-block", boxSizing: "border-box", width: "50%" }}>Address: </span>
				<TextWithCopy copy={address} style={{ display: "inline-block", boxSizing: "border-box", width: "50%" }}>{address}</TextWithCopy>
			</Styled.NodeAddress>
			{/* Node Pubkey */}
			<div style={{ margin: "auto", width: "100%", fontFamily: 'Source Sans Pro' }}>
				<span style={{ color: "#4D4F5C", display: "inline-block", boxSizing: "border-box", width: "50%" }}>PubKey: </span>
				<TextWithCopy copy={pubKey} style={{ display: "inline-block", boxSizing: "border-box", width: "50%" }}>{pubKey}</TextWithCopy>
			</div>
			<Divider />
		</Styled.Container>
	)
}

export default NodeItem;
