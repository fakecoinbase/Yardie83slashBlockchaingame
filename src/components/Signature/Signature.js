import React, { } from 'react';
import { } from './SignatureStyles.js';
import { Textarea } from 'rendition';
import Button from '@material-ui/core/Button';
import Title from '../util/Title/Title'
import LabeledInput from '../util/LabeledInput';

const Signature = () => {
	return (
		<>
			<Title title="Signature" />
			<div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
			<LabeledInput label={"Parameter 1"} placeholder={"Parameter 1"}/>
			<LabeledInput label={"Parameter 2"} placeholder={"Parameter 2"}/>
				<div style={{ float: "right", paddingBottom: "10px" }}>
					<div style={{ float: "left", paddingRight: "10px" }}>
						<Button variant="contained" color="primary" size="small">Check</Button>
					</div>
					<div style={{ float: "right" }}>
						<Button variant="contained" color="primary" size="small">Sign</Button>
					</div>
				</div>
				<div style={{ float: "right", width: "100%", paddingBottom: "10px" }}>
					<span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Output</span>
					<Textarea style={{ height: "70px", minHeight: "70px" }}></Textarea>
				</div>
			</div>
		</>
	);
};

export default Signature;
