import React from 'react';
import { Styled } from './NodeItemStyles.js';
import { Divider } from 'rendition';

const NodeItem = ({ node }) => {
	const { address, pubKey } = node;
	return (
		<Styled.Container>
			<Styled.NodePubKey>
				<Styled.Labelspan>Public Key:</Styled.Labelspan>
				<Styled.TextWithCopy copy={pubKey}>{pubKey}</Styled.TextWithCopy>
			</Styled.NodePubKey>
			<Styled.NodeAddress>
				<Styled.Labelspan>Address:</Styled.Labelspan>
				<Styled.TextWithCopy copy={address}>{address}</Styled.TextWithCopy>
			</Styled.NodeAddress>
			<Divider />
		</Styled.Container>
	)
}

export default NodeItem;
