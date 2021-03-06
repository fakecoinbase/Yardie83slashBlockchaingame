import React from 'react';
import { Heading } from 'rendition';
import { Wrapper } from './HeaderbannerStyles.js';

const Headerbanner = (props) => {
	// const [hook, setHook] = useState(hook);

	return (
		<Wrapper>
			<Heading.h6 style={{ fontFamily: 'Source Sans Pro' }}>{props.children}</Heading.h6>
		</Wrapper>
	);
};

export default Headerbanner;
