import React from 'react';
import { StyledWrapper } from './TitleStyles.js';
import { Heading, Flex } from 'rendition';
import Headerbanner from '../Headerbanner/Headerbanner'

const Title = (props) => {

	return (
		<>
			<Flex flexDirection="row" alignItems="center" pt={1}>
				{props.icon &&
					<div style={{ paddingLeft: '20px' }}>
						<img alt='' src={props.icon} height={25} width={25} />
					</div>}
				{props.title && <Heading.h3 style={{ fontFamily: 'Source Sans Pro', color: "#282828", paddingLeft: "10px" }}>{props.title}</Heading.h3>}
			</Flex>
			{props.subTitle && <Headerbanner>{props.subTitle}</Headerbanner>}
		</>
	);
};

export default Title;
