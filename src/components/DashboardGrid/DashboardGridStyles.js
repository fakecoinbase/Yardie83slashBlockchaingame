import styled, { css } from "styled-components";
import { Card } from "rendition";

export const GridCard = styled(Card)`
  ${props =>
    props.style.height &&
    css`
      height: ${props.style.height};
    `};
  padding: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover {
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.34);
  }
`;
