import React, { useEffect, useState } from "react";
import Tree, { ReactD3TreeItem } from "react-d3-tree";
import Title from "../util/Title";
import { useOnBlockAddedSubscription, Bloxx_Block, useBlockLazyQuery } from "../../generated/graphql";
import useSelectedBlock from "../../customHooks/useSelectedBlock/useSelectedBlock";

const Blockchain = ({ admin }: any) => {
  const { data: blockSubscriptionData } = useOnBlockAddedSubscription();
  const [, setSelectedBlock] = useSelectedBlock();

  const [treeData, setTreeData] = useState<ReactD3TreeItem[]>([
    {
      name: "Genesis",
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
          blockHash: block.blockHash,
          attributes: {
            Hash: block.blockHash.substr(0, 5) + "..." + block.blockHash.substr(block.blockHash.length - 5, 5),
            Status: block.blockStatus
          },
          nodeSvgShape: {
            shape: "rect",
            shapeProps: {
              width: 80,
              height: 20,
              y: -20,
              x: 8,
              fill: block.blockStatus === "confirmed" ? "#d2f3e0" : "#ffd19a",
              stroke: "none"
            }
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
    if (blockSubscriptionData !== undefined) {
      tree = createDataTree(blockSubscriptionData!.bloxx_block);
      setTreeData(tree);
    }
  }, [blockSubscriptionData]);

  const [blockQuery, { data: blockQueryData }] = useBlockLazyQuery();

  const onClick = (blockHash: string) => {
    blockQuery({
      variables: {
        blockHash: blockHash
      }
    });
  };

  useEffect(() => {
    setSelectedBlock(blockQueryData);
  }, [blockQueryData, setSelectedBlock]);

  const subTitle = (
    <div style={{ width: "100%" }}>
      <span style={{ display: "inline-block", boxSizing: "border-box", width: "33%" }}>Blockchain</span>
    </div>
  );

  return (
    //TODO The height of the div is hard coded. Should be dynamically calcuated from the react-grid-layout columns * rows
    <div style={{ height: admin ? 125 * 6 + "px" : "220px", minWidth: "600px" }}>
    <Title subTitle={subTitle} />
    {treeData !== undefined && (
      <Tree
        data={treeData}
        collapsible={false}
        pathFunc={"elbow"}
        translate={{ x: 50, y: 100 }}
        scaleExtent={{ min: 0.3, max: 2 }}
        nodeSize={{ x: 200, y: 100 }}
        onClick={(nodeData: any) => {
          if (nodeData && nodeData.blockHash) {
            onClick(nodeData!.blockHash);
          }
        }}
      />
    )}
    </div>
  );
};

export default Blockchain;
