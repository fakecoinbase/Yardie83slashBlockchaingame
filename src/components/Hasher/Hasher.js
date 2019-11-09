import React, { useState, useEffect } from 'react';
import { } from './HasherStyles.js';
import { Input, Textarea } from 'rendition';
import Title from '../util/Title/Title'
import Button from '@material-ui/core/Button';

const Hasher = (props) => {
	const [balance, setBalance] = useState(0);
	const [height, setHeight] = useState();

	useEffect(() => {
		setHeight(props.height)
	}, [props.height]);


	return (
		<div style={{ padding: "5px" }}>
			<Title title="Hasher" />
			<div style={{padding: "5px"}}>
			<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
				<div style={{ display: "inline-block", boxSizing: "border-box", width: "20%" }}>
					<span  style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Input</span>
					</div>
				<div style={{ display: "inline-block", boxSizing: "border-box", width: "80%" }}><Input style={{ height: "30px" }} placeholder="Input"></Input></div>
			</div>
			<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
			<div style={{float: "right", width: "100%", paddingBottom: "10px" }}>
						<span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Output</span>
						<Textarea style={{ height: "100px", minHeight: "100px" }}></Textarea>
				</div></div>
			<div style={{ float: "right", paddingBottom: "10px"}}>
				<div style={{ float: "left", paddingRight:"10px"}}>
				<Button variant="contained" color="primary" size="small">Hash</Button>
				</div>
				<div style={{ float: "right"}}>
				<Button variant="contained" color="primary" size="small">Copy</Button>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Hasher;
