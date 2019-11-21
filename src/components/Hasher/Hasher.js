import React, { useState } from 'react';
import { } from './HasherStyles.js';
import { Input, Textarea } from 'rendition';
import Title from '../util/Title/Title'
import Button from '@material-ui/core/Button';
import hash from '../../services/hasher'

const Hasher = (props) => {

	const [input, setInput] = useState();
	const [output, setOutput] = useState();

	const hashInput = () => {
		const hashedInput = hash(input);
		setOutput(hashedInput);
	}

	return (
		<>
			<Title title="Hasher" />
			<div style={{ padding: "5px" }}>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "20%" }}>
						<span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Input</span>
					</div>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "80%" }}><Input style={{ height: "30px" }} placeholder="Input" onChange={(e) => { setInput(e.target.value);  }}></Input></div>
				</div>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ float: "right", width: "100%", paddingBottom: "10px" }}>
						<span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Output</span>
						<Textarea value={output} style={{ height: "100px", minHeight: "100px" }}></Textarea>
					</div>
				</div>
				<div style={{ float: "right", paddingBottom: "10px" }}>
					<div style={{ float: "left", paddingRight: "10px" }}>
						<Button onClick={hashInput} variant="contained" color="primary" size="small">Hash</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hasher;


// const mymethod = () => {
// 	let a = 0;
// 	const setA = (newValue) => {
// 		a = newValue;
// 	}

// 	return [
// 		a, 
// 		setA
// 	]
// }
