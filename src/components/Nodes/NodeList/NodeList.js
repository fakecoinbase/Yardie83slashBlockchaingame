import React from 'react';
import NodeItem from '../NodeItem'

const NodeList = ({ nodes }) => 
	nodes.map((node, index) => (
		<NodeItem node={node} key={index} />
	))


export default NodeList;
