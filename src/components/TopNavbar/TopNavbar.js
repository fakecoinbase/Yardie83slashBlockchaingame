import React from 'react';
import { Provider, Navbar } from 'rendition';

import Brand from './Brand'
import UserInfo from './UserInfo/UserInfo';

const TopNavbar = (props) => {

	return (
		<>
			<Provider>
				{props.admin ?
					<Navbar brand={Brand} style={{ background: "#282828", height: "70px" }} /> :
					<UserInfo />
				}
			</Provider>
		</>
	);
};

export default TopNavbar;
