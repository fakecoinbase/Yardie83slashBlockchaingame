import React, { useState, useEffect } from 'react';
import { } from './PublishStyles.js';
import { Button } from '@material-ui/core';
import Title from '../util/Title/Title'

const Publish = () => {
	// const [hook, setHook] = useState(hook);

	return (
		<div style={{ padding: "5px" }}>
			<Title subTitle="Publish" />
			<div style={{ display: "flex", justifyContent: "center", paddingBottom: "10px", paddingTop: "10px" }}>
			<Button variant="contained" color="primary" size="large">Publish Block</Button>
			</div>
		</div>
	);
};

export default Publish;
