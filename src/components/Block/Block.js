import React, { useState, useEffect } from 'react'
import { } from './BlockStyles.js'
import { Input } from 'rendition'
import {Button} from '@material-ui/core'
import Title from '../util/Title/Title'

const Block = () => {
	// const [hook, setHook] = useState(hook);

	return (
		<>
			<Title title="Block" subTitle="Block Header"></Title>
			<div style={{paddingLeft: "10px", paddingRight: "10px"}}>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "30%", fontFamily: 'Source Sans Pro', color:"#4D4F5C" }}><span>Block #</span></div>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "70%" }}><Input style={{ height: "30px" }}></Input></div>
				</div>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "30%", fontFamily: 'Source Sans Pro', color:"#4D4F5C"  }}><span>Previous Block</span></div>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "70%" }}><Input style={{ height: "30px" }}></Input></div>
				</div>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "30%", fontFamily: 'Source Sans Pro', color:"#4D4F5C"  }}><span>Merkle Root</span></div>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "70%" }}><Input style={{ height: "30px" }}></Input></div>
				</div>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "30%", fontFamily: 'Source Sans Pro', color:"#4D4F5C"  }}><span>Timestamp</span></div>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "70%" }}><Input style={{ height: "30px" }}></Input></div>
				</div>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "30%", fontFamily: 'Source Sans Pro', color:"#4D4F5C"  }}><span>Difficulty</span></div>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "70%" }}><Input style={{ height: "30px" }}></Input></div>
				</div>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "30%", fontFamily: 'Source Sans Pro', color:"#4D4F5C"  }}><span>Transaction</span></div>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "70%" }}><Input style={{ height: "30px" }}></Input></div>
				</div>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "30%", fontFamily: 'Source Sans Pro', color:"#4D4F5C"  }}><span>Nonce</span></div>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "70%" }}><Input style={{ height: "30px" }}></Input></div>
				</div>
				<div style={{ display: "flex", justifyContent: "right", paddingBottom: "10px", paddingTop: "10px" }}>
				<Button variant="contained" color="primary">Generate Nonce</Button>
				</div>
				<div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "30%", fontFamily: 'Source Sans Pro', color:"#4D4F5C"  }}><span>Block Hash</span></div>
					<div style={{ display: "inline-block", boxSizing: "border-box", width: "70%" }}><Input style={{ height: "30px" }}></Input></div>
				</div>
				<Title subTitle="Selected Transactions"></Title>

			</div>
		</>
	);
};

export default Block;
