import React, { } from 'react';
import { } from './SignatureStyles.js';
import { Input, Textarea } from 'rendition';
import Button from '@material-ui/core/Button';
import Title from '../util/Title/Title'

const Signature = () => {
	// const [hook, setHook] = useState(hook);

	return (
		<div style={{ padding: "5px" }}>
			<Title title="Signature" />
			<div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
			<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
				<div style={{ display: "inline-block", boxSizing: "border-box", width: "20%" }}>
					<span  style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Parameter 1</span>
					</div>
				<div style={{ display: "inline-block", boxSizing: "border-box", width: "80%" }}><Input style={{ height: "30px" }} placeholder="Parameter 1"></Input></div>
			</div>
			<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
				<div style={{ display: "inline-block", boxSizing: "border-box", width: "20%" }}>
					<span  style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Parameter 2</span>
					</div>
				<div style={{ display: "inline-block", boxSizing: "border-box", width: "80%" }}><Input style={{ height: "30px" }} placeholder="Parameter 2"></Input></div>
			</div>
				<div style={{ float: "right", paddingTop: "5px" }}>
					<Button variant="contained" color="primary" size="small">Sign</Button>
				</div>
				<div style={{float: "right", width: "100%", paddingBottom: "10px" }}>
						<span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Output</span>
						<Textarea style={{ height: "70px", minHeight: "70px" }}></Textarea>
				</div>
			</div>
		</div>
	);
};

export default Signature;
