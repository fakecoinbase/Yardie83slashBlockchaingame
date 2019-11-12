import React from 'react';
import Title from '../util/Title/Title'
import NodeList from './NodeList'

const Nodes = (props) => {

		//TODO remove dummy data in favor for API call
		const nodes = [
			{ name: "nodeName1", pubKey: "ds6LKJd8hlk2jfe", address: "ljkvc8nv54rsd" },
			{ name: "nodeName2", pubKey: "ds6LKJd8hlk2jfe", address: "ljkvc8nv54rsd" },
			{ name: "nodeName3", pubKey: "ds6LKJd8hlk2jfe", address: "ljkvc8nv54rsd" },
			{ name: "nodeName", pubKey: "ds6LKJd8hlk2jfe", address: "ljkvc8nv54rsd" },
			{ name: "nodeName", pubKey: "ds6LKJd8hlk2jfe", address: "ljkvc8nv54rsd" },
			{ name: "nodeName", pubKey: "ds6LKJd8hlk2jfe", address: "ljkvc8nv54rsd" },
			{ name: "nodeName", pubKey: "ds6LKJd8hlk2jfe", address: "ljkvc8nv54rsd" },
			{ name: "nodeName", pubKey: "ds6LKJd8hlk2jfe", address: "ljkvc8nv54rsd" }
		]

	return (
		// TODO Make subtitle dynamic
		<>
			<Title title="Available Nodes" subTitle="Total: 18"></Title>
			<NodeList nodes={nodes}></NodeList>
		</>
	);
};

export default Nodes;
