import React, { useState } from 'react';
import { } from './TopNavbarStyles.js';
import useUserInfo from '../../customHooks/useUserInfo'
import { Provider, Navbar, Txt } from 'rendition';
import Button from "@material-ui/core/Button";

import Logo from '../../assets/img/logo.png'

const TopNavbar = () => {

	const [userInfo] = useUserInfo();

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
				<Navbar brand={brand} style={{ background: "#282828", height: "70px", }}>
					<span>|</span>
					<Txt color='white'>
						My Private Key:
					</Txt>
					<Button variant="contained" style={{ width: "30px", height: "15px", fontSize: "10px", backgroundColor: (showPK ? "#e87474" : "") }} onClick={togglePrivateKey}><strong>{showPK ? "Hide" : "Show"}</strong></Button>
					<Txt color='white' style={{ visibility: (showPK ? "visible" : "hidden"), color: "#e87474" }}>
						{userInfo.privateKey && userInfo.privateKey}
					</Txt>
					<span>|</span>
					<Txt color='white'>
						My Public Key: <strong>{userInfo.publicKey && userInfo.publicKey}</strong>
					</Txt>
					<span>|</span>
					<Txt color='white'>
						My Address: <strong>{userInfo.address && userInfo.address}</strong>
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
