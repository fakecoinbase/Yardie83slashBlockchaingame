import React from 'react';
import { Provider } from 'rendition';

import UserInfo from './UserInfo/UserInfo';
import AdminControls from './AdminControls/AdminControls';

const TopNavbar = (props) => {

	return (
		<>
			<Provider>
				{props.admin ?
					<AdminControls/> :
					<UserInfo />
				}
			</Provider>
		</>
	);
};

export default TopNavbar;
