import React from 'react';
import DashboardGrid from '../../DashboardGrid/DashboardGrid';
import { adminLayouts } from '../../DashboardGrid/gridLayout';
import TopNavbar from '../../TopNavbar/TopNavbar';
import useLoginPage from '../../../customHooks/useLoginPage';
import Login from '../../Login';

const Admin = () => {
	const [showLoginPage] = useLoginPage();

	return showLoginPage ? (
		<Login admin />
	) : (
		<>
			<TopNavbar admin />
			<DashboardGrid layout={adminLayouts} admin />
		</>
	);
};

export default Admin;
