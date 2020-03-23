import React, { useState, useEffect } from 'react';
import { Provider, Modal, Card, Box, Flex, Input, Alert } from 'rendition';
import { Button, Snackbar } from '@material-ui/core';
import useSetUserPasswordModal from '../../../../customHooks/useSetUserPasswordModal';
import { useUpdateUserPasswordMutation, useOnUserPasswordChangedSubscription } from '../../../../generated/graphql';

const SetUserPasswordModal = () => {
	const [, setShowUserPasswordModal] = useSetUserPasswordModal();
	const [isEditDisabled, setIsEditDisabled] = useState(false);
	const [isEditable, setIsEditable] = useState(true);
	const [value, setValue] = useState('');
	const [isSaveDisabled, setIsSaveDisabled] = useState(true);
	const [oldPassword, setOldPassword] = useState('');
	const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);

	const [updateUserPassword] = useUpdateUserPasswordMutation();
	const { data: userPasswordSubscriptionData } = useOnUserPasswordChangedSubscription();

	useEffect(() => {
		if (userPasswordSubscriptionData !== undefined) {
			setValue(userPasswordSubscriptionData.bloxx_userPassword[0].password);
		}
	}, [userPasswordSubscriptionData]);

	const onEdit = () => {
		setIsEditDisabled(true);
		setIsSaveDisabled(false);
		setIsEditable(false);
		setShowSuccessSnackbar(false);
		setOldPassword(value);
	};
	const onSave = () => {
		setIsEditDisabled(false);
		setIsSaveDisabled(true);
		setIsEditable(true);

		updateUserPassword({
			variables: {
				oldPassword: oldPassword,
				newPassword: value,
			},
		}).then(result => {
			if (result.data !== undefined) {
				setShowSuccessSnackbar(true);
			}
		});
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<Provider>
			<Modal title={'User Password'} action={'Close'} done={() => setShowUserPasswordModal(false)}>
				<Card>
					<Box m={3}>
						<Flex justifyContent={'center'}>
							<Input readOnly={isEditable} value={value} disabled={isEditable} onChange={e => onChange(e)} />
							<Button
								variant='contained'
								disabled={isEditDisabled}
								color='primary'
								size='small'
								onClick={onEdit}
								style={{ marginLeft: '10px', marginRight: '10px' }}>
								Edit
							</Button>
							<Button
								variant='contained'
								disabled={isSaveDisabled}
								color='primary'
								size='small'
								onClick={onSave}
								style={{ marginRight: '10px' }}>
								Save
							</Button>
							<Snackbar open={showSuccessSnackbar} autoHideDuration={6000}>
								<Alert success>Password changed!</Alert>
							</Snackbar>
						</Flex>
					</Box>
				</Card>
			</Modal>
		</Provider>
	);
};

export default SetUserPasswordModal;
