import React, { useState, useEffect } from 'react';
import { } from './TopNavbarStyles.js';
import { Provider, Navbar, Txt, Img, Box } from 'rendition';
import Logo from '../../assets/img/logo.png'

const TopNavbar = () => {
	// const [hook, setHook] = useState(hook);

	const brand = (
		<div style={{display: "flex"}}>
			<div style={{paddingTop:"15px", paddingRight: "20px"}}>
			<img alt="" src={Logo} width={40} height={40}/>
			</div>
			<h1>Bloxx Game</h1>
		</div>
	)


	return (
		<>
			<Provider>
				<Navbar brand={brand} style={{ background: "#43425D", height: "70px" }}>
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
