import React, { useState, useEffect } from 'react';
import { Heading, Container, Provider, Flex, Button, Input, Txt } from 'rendition';

import Logo from '../../assets/img/blockchainsymbol.svg';
import useLoginPage from '../../customHooks/useLoginPage';
import { useAdminLoginLazyQuery, useUserLoginLazyQuery } from '../../generated/graphql';

const Login = ({ admin }: { admin?: boolean }) => {
	const [adminLoginQuery, { data: adminQueryData }] = useAdminLoginLazyQuery();
	const [userLoginQuery, { data: userQueryData }] = useUserLoginLazyQuery();

	const [, setShowLoginPage] = useLoginPage();

	const [password, setPassword] = useState('');

	const [loginError, setLoginError] = useState(false);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginError(false);
		setPassword(e.target.value);
	};

	const onKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
		if (e.key === 'Enter') {
			admin ? onAdminLogin() : onUserLogin();
		}
	};

	const onAdminLogin = () => {
		adminLoginQuery({
			variables: {
				password: password
			}
		});
	};

	useEffect(() => {
		if (adminQueryData !== undefined && adminQueryData.bloxx_adminPassword !== undefined) {
			adminQueryData!.bloxx_adminPassword.length !== 0 ? setShowLoginPage(false) : setLoginError(true);
		}
	}, [adminQueryData]);

	const onUserLogin = () => {
		userLoginQuery({
			variables: {
				password: password
			}
		});
	};

	useEffect(() => {
		if (userQueryData !== undefined && userQueryData.bloxx_userPassword !== undefined) {
			userQueryData!.bloxx_userPassword.length !== 0 ? setShowLoginPage(false) : setLoginError(true);
		}
	}, [userQueryData]);

	return (
		<Provider>
			<Container textAlign='center' backgroundColor={'white'} mt={6} pt={5} pb={5} style={{ borderRadius: '15px' }}>
				<Heading.h1>Welcome to the BloxxGame</Heading.h1>
				<Flex flexDirection='column' alignItems='center'>
					<div style={{ paddingTop: '15px', paddingRight: '20px' }}>
						<img alt='' src={Logo} height={400} width={400} />
					</div>
					<Container pt={3} pb={3}>
						<Heading.h4>Password</Heading.h4>
					</Container>
					<Flex flexDirection='column' alignItems='flex-start'>
						<Flex flexDirection='row' alignItems='center' justifyContent='center'>
							<Input
								type={admin ? 'password' : 'text'}
								onKeyPress={e => onKeyPress(e)}
								onChange={e => onChange(e)}
								style={{ borderColor: loginError ? 'red' : '' }}
							/>
						</Flex>
						{loginError && <Txt color={'red'}>Incorrect Password</Txt>}
					</Flex>
					<Container pt={3} pb={3}>
						<Button onClick={admin ? onAdminLogin : onUserLogin}>Login</Button>
					</Container>
				</Flex>
			</Container>
		</Provider>
	);
};

export default Login;
