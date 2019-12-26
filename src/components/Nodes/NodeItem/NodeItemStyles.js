import styled from 'styled-components';
import { TextWithCopy as TwC } from 'rendition'

const Container = styled.div`
	padding-left: 10px;
`;

const baseSpan = styled.span`
font-Family: 'Roboto';
`;

const NodeName = styled.div`
color: #4D4F5C;
`;

const NodeAddress = styled(baseSpan)`
margin: auto;
width: 100%;
`;

const NodePubKey = styled.div`
margin-right: 40px; 
/* width: 80%;  */
font-family: 'Source Sans Pro';
`;

const TextWithCopy = styled(TwC)`
font-size: 10px;
display: inline-block;
box-sizing: border-box; 
`;

const Labelspan = styled.span`
font-weight: bold;
color: black;
display: inline-block; 
box-sizing: border-box; 
/* width: 50%; */
`;

export const Styled = {
    Container,
    NodeName,
    NodeAddress,
    NodePubKey,
    TextWithCopy,
    Labelspan
};
