import React from "react";
import { Tabs, Tab } from "rendition";
import NewBlock from "./NewBlock/NewBlock";
import CheckBlock from "./CheckBlock/CheckBlock";
import Title from "../util/Title/Title";

const Block = () => {
  return (
    <>
      <Title title="Block" />
      <Tabs>
        <Tab title="New Block">
          <NewBlock />
        </Tab>
        <Tab title="Check Block">
          <CheckBlock />
        </Tab>
      </Tabs>
    </>
  );
};

export default Block;
