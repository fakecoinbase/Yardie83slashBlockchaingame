import React, { useState, useEffect } from 'react';
import { StyledWrapper } from './TitleStyles.js';
import { Heading, Txt } from 'rendition';
import Headerbanner from '../Headerbanner/Headerbanner'


const Title = (props) => {
	// const [hook, setHook] = useState(hook);

	return (
		<StyledWrapper>
			{props.title ? <Heading.h3 style={{ fontFamily: 'Source Sans Pro', color: "#43425D", paddingLeft: "10px" }}>{props.title}</Heading.h3> : null}
			{props.subTitle ? <Headerbanner>{props.subTitle}</Headerbanner> : null}
		</StyledWrapper>
	);
};

export default Title;
