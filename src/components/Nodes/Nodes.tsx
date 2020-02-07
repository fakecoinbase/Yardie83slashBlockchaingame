import React, { useState, useEffect } from "react";
import Title from "../util/Title/Title";
import NodeList from "./NodeList/NodeList";
import { useOnNewNodeAddedSubscription } from "../../generated/graphql";
import useUserInfo, { UserType } from "../../customHooks/useUserInfo/useUserInfo";

const Nodes = () => {
  const [nodes, setNodes] = useState<Array<Object>>([]);
  const [userInfo]: [UserType] = useUserInfo();

  const { data } = useOnNewNodeAddedSubscription();

  useEffect(() => {
    if (data) {
      let _nodes: { pubKey?: string; address?: string }[] = [];

      data.bloxx_node.forEach(node => {
        if (
          node.publicKey !== "undefined" &&
          typeof node.addresses[0] !== "undefined" &&
          node.addresses[0].balance !== null
        ) {
          if (userInfo.publicKey !== node.publicKey)
            _nodes.push({
              pubKey: node.publicKey,
              address: node.addresses[0].id
            });
        }
      });
      setNodes(_nodes);
    }
  }, [data, userInfo.publicKey]);

  return (
    <>
      <Title title="Available Nodes" subTitle={"Total: " + nodes.length}></Title>
      <NodeList nodes={nodes}></NodeList>
    </>
  );
};

export default Nodes;
