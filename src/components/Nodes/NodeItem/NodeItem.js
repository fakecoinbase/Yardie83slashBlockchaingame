import React from 'react';
import { Styled } from './NodeItemStyles.js';

const NodeItem = ({ node, index }) => {
	const { address, pubKey } = node;
	return (
		<Styled.Container style={{ backgroundColor: ((index % 2 === 0) ? "white" : "#F0F0F7") }}>
			<Styled.NodeAddress>
				<Styled.Labelspan>Address: </Styled.Labelspan>
				<br />
				<Styled.TextWithCopy style={{ fontSize: "12px" }} copy={address}>{address}</Styled.TextWithCopy>
			</Styled.NodeAddress>
			<Styled.NodePubKey>
				<Styled.Labelspan>Public Key: </Styled.Labelspan>
				<br />
				<Styled.TextWithCopy style={{
					fontSize: "12px",
					maxWidth: "230px",
					wordWrap: "break-word"
				}} copy={pubKey}>{pubKey}</Styled.TextWithCopy>
			</Styled.NodePubKey>
		</Styled.Container>
	)
}

export default NodeItem;
