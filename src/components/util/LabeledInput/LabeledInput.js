import React from 'react';
import { Input } from 'rendition'
import { } from './LabeledInputStyles.js';

const LabeledInput = (props) => {
	const { label, placeholder, id, onChange, value, readOnly } = props;
	return (
		<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
			<div style={{ display: "inline-block", boxSizing: "border-box", width: "30%", fontFamily: 'Source Sans Pro', color: "#4D4F5C" }}>
				<span>{label}</span>
			</div>
			<div style={{ display: "inline-block", boxSizing: "border-box", width: "70%" }}>
				<Input readOnly={readOnly} value={value} onChange={(e) => onChange(e.target.value, id)} style={{ height: "30px" }} placeholder={placeholder ? placeholder : ''} />
			</div>
		</div>
	);
};

export default LabeledInput;
