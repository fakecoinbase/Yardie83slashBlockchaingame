import React, { useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import TransferCoinModal from '../../TopNavbar/AdminControls/TransferCoinModal/TransferCoinModal';
import ResetGameModal from '../../TopNavbar/AdminControls/ResetGameModal/ResetGameModal';
import useAdminModal from '../../../customHooks/useAdminModal/useAdminModal';
import useResetGameModal from '../../../customHooks/useResetGameModal/useResetGameModal';
import { GridCard } from '../DashboardGridStyles';
import { Blockchain, CheckBlock } from '../..';
import { breakpoints, cols } from '../gridLayout';
import useAdminInfo from '../../../customHooks/useAdminInfo';
import { useInsertNodeMutation, useAdminNodeLazyQuery } from '../../../generated/graphql';
import generateNode from '../../../services/nodeGen';
import LoadingIndicator from '../../util/LoadingIndicator/LoadingIndicator';
import SetUserPasswordModal from '../../TopNavbar/AdminControls/SetUserPasswordModal';
import useSetUserPasswordModal from '../../../customHooks/useSetUserPasswordModal';

const AdminGrid = (props: any) => {
	const ResponsiveGridLayout = WidthProvider(Responsive);

	const [showAdminModal] = useAdminModal();
	const [showResetGameModal] = useResetGameModal();
	const [showUserPasswordModal] = useSetUserPasswordModal();
	const [adminInfo, setAdminInfo] = useAdminInfo();

	const [adminNodeLazyQuery, { data: adminNodeQueryData }] = useAdminNodeLazyQuery();
	const [insertNodeMutation, { loading: loadingInsertNode }] = useInsertNodeMutation();

	useEffect(() => {
		adminNodeLazyQuery();
	}, [adminNodeLazyQuery]);

	/**
	 * If there is no admin node in the database this 
	 * creates the admin node and adds it to the database
	 * otherwise sets the existing admin node from the DB. 
	 */
	useEffect(() => {
		if (adminNodeQueryData !== undefined) {
			if (adminNodeQueryData!.bloxx_node.length !== 0) {
				const existingAdminNode = {
					privateKey: adminNodeQueryData.bloxx_node[0].privateKey,
					publicKey: adminNodeQueryData.bloxx_node[0].publicKey,
					address: {
						id: adminNodeQueryData.bloxx_node[0].addresses[0].id,
						amount: adminNodeQueryData.bloxx_node[0].addresses[0].balance,
					},
				};
				setAdminInfo(existingAdminNode);
			} else {
				const info = generateNode();
				info.address = "0";
				insertNodeMutation({
					variables: { publicKey: info.publicKey, privateKey: info.privateKey, admin: true, address: info.address },
				})
					.then(res => {
						return {
							privateKey: res!.data!.insert_bloxx_node!.returning[0].privateKey,
							publicKey: res!.data!.insert_bloxx_node!.returning[0].publicKey,
							address: {
								id: res!.data!.insert_bloxx_node!.returning[0].addresses[0].id,
								amount: res!.data!.insert_bloxx_node!.returning[0].addresses[0].balance,
							},
						};
					})
					.then(res => {
						setAdminInfo(res);
					});
			}
		}
	}, [adminNodeQueryData]);

	return showAdminModal ? (
		<TransferCoinModal adminInfo={adminInfo} />
	) : showResetGameModal ? (
		<ResetGameModal />
	) : showUserPasswordModal ? (
		<SetUserPasswordModal />
	) : (
		<ResponsiveGridLayout
			className='layout'
			layouts={props.layout}
			breakpoints={breakpoints}
			cols={cols}
			isDraggable={false}
			margin={[10, 15]}
			rowHeight={125}
			autoSize={true}>
			<GridCard key='blockchain'>{loadingInsertNode ? <LoadingIndicator /> : <Blockchain admin />}</GridCard>
			<GridCard key='block'>
				<CheckBlock admin />
			</GridCard>
		</ResponsiveGridLayout>
	);
};

export default AdminGrid;
