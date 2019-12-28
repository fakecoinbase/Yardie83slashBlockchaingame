import React from "react";
import Tree from "react-d3-tree";
import {} from "./BlockchainStyles.js";
import Title from "../util/Title/Title";

const Blockchain = () => {
  const myTreeData = [
    {
      name: "Top Level",
      attributes: {
        keyA: "val A",
        keyB: "val B",
        keyC: "val C"
      },
      children: [
        {
          name: "Level 2: A",
          attributes: {
            keyA: "val A",
            keyB: "val B",
            keyC: "val C"
          }
        },
        {
          name: "Level 2: B"
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
    <div style={{ height: "220px", minWidth: "600px"}}>
      <Title subTitle={subTitle} />
      <Tree data={myTreeData} />
    </div>
  );
};

export default Blockchain;
