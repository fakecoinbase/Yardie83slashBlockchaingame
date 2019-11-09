import React, { useState, useEffect } from 'react';
import { Divider, TextWithCopy, Card } from 'rendition';
import Title from '../util/Title/Title'
import { Heading } from 'rendition';
const Nodes = (props) => {

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

	// const [balance, setBalance] = useState(0);

	return (
		<div style={{ padding: "5px, 0px, 5px, 0px" }}>
			<Title title="Available Nodes" subTitle="Total: 18"></Title>
			{nodes.map((node, index) => {
				return (
					<div style={{paddingLeft: "10px"}} key={node.address + index}>
						<span style={{fontFamily: 'Roboto', color:"#4D4F5C"}}>{node.name}</span>
						<div style={{ margin: "auto", width: "100%", fontFamily: 'Roboto'}}>
							<span style={{ color:"#4D4F5C", display: "inline-block", boxSizing: "border-box", width: "50%"}}>Address: </span>
							<TextWithCopy copy={node.address} style={{display: "inline-block", boxSizing: "border-box", width: "50%"}}>{node.address}</TextWithCopy>
						</div>
						<div style={{ margin: "auto", width: "100%", fontFamily: 'Source Sans Pro'}}>
							<span style={{ color:"#4D4F5C", display: "inline-block", boxSizing: "border-box", width: "50%"}}>PubKey: </span>
							<TextWithCopy copy={node.pubKey} style={{display: "inline-block", boxSizing: "border-box", width: "50%"}}>{node.pubKey}</TextWithCopy>
						</div>
						<Divider />
					</div>
				)
			})}
		</div>
	);
};

export default Nodes;
