import React, { useState } from 'react';
import { } from './TopNavbarStyles.js';
import useUserInfo from '../../customHooks/useUserInfo'
import { Provider, Navbar, Txt, TextWithCopy } from 'rendition';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { GoLink } from 'react-icons/go'

import Logo from '../../assets/img/logo.png'

const TopNavbar = () => {

	const [userInfo] = useUserInfo();
	const [showPK, setShowPK] = useState(false);

	const togglePK = () => {
		setShowPK(!showPK)
	}

	const brand = (
		<div style={{ display: "flex", justifyContent: "center", padding: "0px" }}>
			<div style={{ paddingTop: "15px", paddingRight: "20px" }}>
				<img alt="" src={Logo} width={40} height={40} />
			</div>
			<h1> Bloxx <GoLink /> Game </h1>
		</div>
	)

	return (
		<>
			<Provider>
				<Navbar brand={brand} style={{ background: "#282828", height: "70px" }}>
					<Txt color='white'>
						My Private Key:
					</Txt>
					<Txt color='white' style={{ color: (showPK ? "#e87474" : "white") }}>
						{showPK ?
							<TextWithCopy showCopyButton={showPK ? "always" : ""} copy={userInfo.privateKey}>
								<strong>{userInfo.privateKey && userInfo.privateKey.slice(27, 35)} </strong>
							</TextWithCopy> : <Txt>● ● ● ● ● ●</Txt>}
					</Txt>
					{showPK ? <FaEye size={20} color={"#e87474"} onClick={togglePK} /> : <FaEyeSlash size={20} onClick={togglePK} />}
					<span>|</span>
					<Txt color='white'>
						My Public Key: <TextWithCopy showCopyButton={"always"} copy={userInfo.publicKey}><strong>{userInfo.publicKey && userInfo.publicKey.slice(27, 35)} </strong></TextWithCopy>
					</Txt>
					<span>|</span>
					<Txt color='white'>
						My Address: <TextWithCopy showCopyButton={"always"} copy={userInfo.address}><strong>{userInfo.address && userInfo.address.id.slice(0, 8)} </strong></TextWithCopy>
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
