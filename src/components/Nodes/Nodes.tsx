import React, { useState, useEffect } from "react";
import Title from "../util/Title/Title";
import NodeList from "./NodeList/NodeList";
import {useOnNewNodeAddedSubscription} from '../../generated/graphql'

const Nodes = (props: any) => {
  const [nodes, setNodes] = useState<Array<Object>>([]);

  const { data } = useOnNewNodeAddedSubscription();

  useEffect(() => {
    if (data) {
      let _nodes: { pubKey?: string; address?: string }[] = [];

      data.bloxx_node.forEach(node => {
        if (node.publicKey !== "undefined" && typeof node.addresses[0] !== "undefined") {
          _nodes.push({
            pubKey: node.publicKey,
            address: node.addresses[0].id
          });
        }
      });
      setNodes(_nodes);
    }
  }, [data]);

  return (
    <>
      <Title title="Available Nodes" subTitle={"Total: " + nodes.length}></Title>
      <NodeList nodes={nodes}></NodeList>
    </>
  );
};

export default Nodes;
