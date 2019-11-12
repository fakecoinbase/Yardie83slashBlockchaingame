import React from 'react';
import { Styled } from './NodeItemStyles.js';
import { Divider } from 'rendition';

const NodeItem = ({ node }) => {
	const { name, address, pubKey } = node;
	return (
		<Styled.Container>
			<Styled.NodeName>{name}</Styled.NodeName>
			<Styled.NodeAddress>
				<Styled.Labelspan>Address:</Styled.Labelspan>
				<Styled.TextWithCopy copy={address}>{address}</Styled.TextWithCopy>
			</Styled.NodeAddress>
			<Styled.NodePubKey>
				<Styled.Labelspan>PubKey:</Styled.Labelspan>
				<Styled.TextWithCopy copy={pubKey}>{pubKey}</Styled.TextWithCopy>
			</Styled.NodePubKey>
			<Divider />
		</Styled.Container>
	)
}

export default NodeItem;
