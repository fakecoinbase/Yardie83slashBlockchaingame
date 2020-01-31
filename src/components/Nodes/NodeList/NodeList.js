import React from 'react';
import NodeItem from '../NodeItem'

const NodeList = ({ nodes }) =>
	nodes.length > 0 &&
	nodes.map((node, index) => (
		<NodeItem node={node} index={index} key={index} />
	))


export default NodeList;
