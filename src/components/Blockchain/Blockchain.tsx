import React, { useEffect, useState } from "react";
import Tree, { ReactD3TreeItem } from "react-d3-tree";
import {} from "./BlockchainStyles.js";
import Title from "../util/Title/Title";
import { useOnBlockAddedSubscription, Bloxx_Block } from "../../generated/graphql";

const Blockchain = () => {
  const { data } = useOnBlockAddedSubscription();

  const [treeData, setTreeData] = useState<ReactD3TreeItem[]>([
    {
      name: "Block 0",
      attributes: {
        BlockNumber: "",
        BlockHash: "",
        BlockStatus: ""
      }
    }
  ]);

  const createDataTree = (dataset: any[]): ReactD3TreeItem[] => {
    let hashTable = Object.create(null);
    dataset.forEach(
      (block: Bloxx_Block) =>
        (hashTable[block.blockHash] = {
          name: block.blockNumber === 0 ? "Genesis" : "Block " + block.blockNumber,
          attributes: {
            BlockHash: block.blockHash,
            BlockStatus: block.blockStatus
          },
          children: []
        })
    );
    let dataTree: ReactD3TreeItem[] = [];
    dataset.forEach((block: Bloxx_Block) => {
      if (block.previousBlockHash && hashTable[block.previousBlockHash] !== undefined) {
        hashTable[block.previousBlockHash].children.push(hashTable[block.blockHash]);
      } else dataTree.push(hashTable[block.blockHash]);
    });
    return dataTree;
  };

  useEffect(() => {
    let tree: ReactD3TreeItem[] = [];
    if (data !== undefined) {
      tree = createDataTree(data!.bloxx_block);
      setTreeData(tree);
    }
  }, [data]);

  const subTitle = (
    <div style={{ width: "100%" }}>
      <span style={{ display: "inline-block", boxSizing: "border-box", width: "33%" }}>Blockchain</span>
      <span style={{ display: "inline-block", boxSizing: "border-box", width: "33%" }}>Longest chain: 6 </span>
      <span style={{ display: "inline-block", boxSizing: "border-box", width: "33%" }}>Difficulty: 0</span>
    </div>
  );

  return (
    <div style={{ height: "220px", minWidth: "600px" }}>
      <Title subTitle={subTitle} />
      {treeData !== undefined && (
        <Tree
          data={treeData}
          collapsible={false}
          pathFunc={"elbow"}
          translate={{ x: 50, y: 100 }}
          nodeSvgShape={{
            shape: "rect",
            shapeProps: {
              width: 100,
              height: 20,
              y: -20,
              x: -10
            }
          }}
        />
      )}
    </div>
  );
};

export default Blockchain;
