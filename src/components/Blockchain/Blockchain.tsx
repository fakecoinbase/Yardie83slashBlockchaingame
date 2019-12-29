import React from "react";
import Tree, { ReactD3TreeItem } from "react-d3-tree";
import {} from "./BlockchainStyles.js";
import Title from "../util/Title/Title";

const Blockchain = () => {
  const myTreeData: ReactD3TreeItem[] = [
    {
      name: "Genesis",
      attributes: {
        BlockNumber: "0",
        BlockHash: "e3w4zg4h45b",
        BlockStatus: "Accepted"
      },
      children: [
        {
          name: "Block: 1",
          attributes: {
            BlockNumber: "1",
            BlockHash: "e3w4zg4h45b",
            BlockStatus: "Pending"
          },
          nodeSvgShape: {
            shape: "rect",
            shapeProps: {
              width: 100,
              height: 20,
              y: -20,
              x: -10,
              fill: "red"
            }
          }
        },
        {
          name: "Block: 1",
          attributes: {
            BlockNumber: "1",
            BlockHash: "e3w4zg4h45b",
            BlockStatus: "Accepted"
		  },
		  nodeSvgShape: {
            shape: "rect",
            shapeProps: {
              width: 100,
              height: 20,
              y: -20,
              x: -10,
              fill: "green"
            }
          }, children: [
			{
				name: "Block: 2",
				attributes: {
				  BlockNumber: "2",
				  BlockHash: "236zhg432",
				  BlockStatus: "Pending"
				},
				nodeSvgShape: {
				  shape: "rect",
				  shapeProps: {
					width: 100,
					height: 20,
					y: -20,
					x: -10,
					fill: "red"
				  }
				}
			  }, 
		  ]
        }
      ]
    }
  ];
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
      <Tree
        data={myTreeData}
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
    </div>
  );
};

export default Blockchain;
