import React, { useState } from 'react';
import { } from './TopNavbarStyles.js';
import { Provider, Navbar, Txt } from 'rendition';
import Button from "@material-ui/core/Button";

import Logo from '../../assets/img/logo.png'

const TopNavbar = () => {
	const [showPK, setShowPK] = useState(false);

	const brand = (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div style={{ paddingTop: "15px", paddingRight: "20px" }}>
				<img alt="" src={Logo} width={40} height={40} />
			</div>
			<h1>Bloxx Game</h1>
		</div>
	)

	const togglePrivateKey = () => {
		setShowPK(!showPK);
	}

	return (
		<>
			<Provider>
				<Navbar brand={brand} style={{ background: "#43425D", height: "70px", }}>
					<span>|</span>
					<Txt color='white'>
						My Private Key:
					</Txt>
					<Button variant="contained" style={{ width: "30px", height: "15px", fontSize: "10px", backgroundColor: (showPK ? "#e87474" : "") }} onClick={togglePrivateKey}>{showPK ? "Hide" : "Show"}</Button>
					<Txt color='white' style={{ visibility: (showPK ? "visible" : "hidden"), color: "#e87474" }}>
						565rbfgnbzt4se
					</Txt>
					<span>|</span>
					<Txt color='white'>
						My Public Key: fdgsdf4354
					</Txt>
					<span>|</span>
					<Txt color='white'>
						My Address: tg34df5361fe1546e
					</Txt>
					<span>|</span>
					<Txt color='white'>
						Documentation
					</Txt>
				</Navbar>
			</Provider>
		</>
	);
};

export default TopNavbar;
