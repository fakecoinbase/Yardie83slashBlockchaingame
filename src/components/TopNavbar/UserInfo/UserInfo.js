import React, { useState } from 'react';
import useUserInfo from '../../../customHooks/useUserInfo'
import { Txt, TextWithCopy, Navbar } from 'rendition';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Brand from '../Brand'


const UserInfo = () => {

	const [userInfo] = useUserInfo();
	const [showPK, setShowPK] = useState(false);

	const togglePK = () => {
		setShowPK(!showPK)
	}
	return (
		<Navbar brand={Brand} style={{ background: "#282828", height: "70px" }}>
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
				My Address: <strong>{userInfo.address && userInfo.address.id} </strong>
			</Txt>
		</Navbar>
	)
};

export default UserInfo;
