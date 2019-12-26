import React from 'react';
import { Styled } from './NodeItemStyles.js';
import { Divider } from 'rendition';

const NodeItem = ({ node }) => {
	const { address, pubKey } = node;
	return (
		<Styled.Container>
			<Styled.NodePubKey>
				<Styled.Labelspan>Public Key: </Styled.Labelspan>
				<br />
				<Styled.TextWithCopy style={{
					fontSize: "12px",
					maxWidth: "230px",
					wordWrap: "break-word"
				}} copy={pubKey}>{pubKey}</Styled.TextWithCopy>
			</Styled.NodePubKey>
			<Styled.NodeAddress>
				<Styled.Labelspan>Address: </Styled.Labelspan>
				<br />
				<Styled.TextWithCopy style={{ fontSize: "12px" }} copy={address}>{address}</Styled.TextWithCopy>
			</Styled.NodeAddress>
			<Divider />
		</Styled.Container>
	)
}

export default NodeItem;
