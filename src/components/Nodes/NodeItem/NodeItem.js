import React from "react";
import { Styled } from "./NodeItemStyles.js";

const NodeItem = ({ node, index }) => {
  const { address } = node;
  return (
    <Styled.Container
      style={{ backgroundColor: index % 2 === 0 ? "white" : "#F0F0F7" }}
    >
      <Styled.NodeAddress>
        <Styled.TextWithCopy style={{ fontSize: "12px" }} copy={address}>
          {address}
        </Styled.TextWithCopy>
      </Styled.NodeAddress>
    </Styled.Container>
  );
};

export default NodeItem;
