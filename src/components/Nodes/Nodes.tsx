import React, { useState, useEffect } from "react";
import Title from "../util/Title/Title";
import NodeList from "./NodeList/NodeList";
import { useSubscription } from "@apollo/react-hooks";
import NEW_NODE_ADDED from "../../graphql/subscriptions/onNewNodeAdded";

interface Address {
  id: string;
}

interface Addresses extends Array<Address> {}

interface Node {
  publicKey: string;
  addresses: Addresses;
}

interface Nodes {
  bloxx_node: Array<Node>;
}

const Nodes = (props: any) => {
  const [nodes, setNodes] = useState<Array<Object>>([]);

  const { data } = useSubscription<Nodes>(NEW_NODE_ADDED);

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
      console.table(_nodes);
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
