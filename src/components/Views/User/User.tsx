import React from 'react';
import TopNavbar from '../../TopNavbar/TopNavbar';
import DashboardGrid from '../../DashboardGrid/DashboardGrid';
import { userLayouts } from '../../DashboardGrid/gridLayout';
import useLoginPage from '../../../customHooks/useLoginPage';
import Login from '../../Login';

const User = () => {
	const [showLoginPage] = useLoginPage();

	return showLoginPage ? (
		<Login />
	) : (
		<>
			<TopNavbar />
			<DashboardGrid layout={userLayouts} />
		</>
	);
};

export default User;
