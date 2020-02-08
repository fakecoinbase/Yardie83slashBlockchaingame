import React from 'react';
import { Flex } from 'rendition';
import Loader from 'react-loader-spinner';

const LoadingIndicator = () => (
	<Flex pt={30} justifyContent={"center"} alignItems={"center"} >
		<Loader type="Circles" color="#00BFFF" height={100} width={100} />
	</Flex>)

export default LoadingIndicator;
