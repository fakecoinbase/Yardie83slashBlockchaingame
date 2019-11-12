import styled from 'styled-components';

const Container = styled.div`
	padding-left: 10px;
`;

const sharedSpanStyle = styled.span`
font-Family: 'Roboto';
`;

const NodeName = styled(sharedSpanStyle)`
color: #4D4F5C;
`;

const NodeAddress = styled(sharedSpanStyle)`
margin: auto;
width: 100%;
`;

export const Styled = {
    Container,
    NodeName,
    NodeAddress
};
