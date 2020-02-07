import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import { GridCard } from "../DashboardGridStyles";
import { Nodes, Hasher, Signature, Wallet, UnspentTx, Mempool, Blockchain, Block, Merkl, Modal } from "../../index";
import { breakpoints, cols } from "../gridLayout";

const UserGrid = (props: any) => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const [showModal, setShowModal] = useState(true);

  return showModal ? (
    <Modal setShowModal={setShowModal} />
  ) : (
    <ResponsiveGridLayout
      className="layout"
      layouts={props.layout}
      breakpoints={breakpoints}
      cols={cols}
      isDraggable={false}
      margin={[10, 15]}
      rowHeight={125}
    >
      <GridCard key="nodes">
        <Nodes />
      </GridCard>
      <GridCard key="hasher">
        <Hasher />
      </GridCard>
      <GridCard key="signature">
        <Signature />
      </GridCard>
      <GridCard key="unspentTx">
        <UnspentTx />
      </GridCard>
      <GridCard key="mempool">
        <Mempool />
      </GridCard>
      <GridCard key="merkl">
        <Merkl />
      </GridCard>
      <GridCard key="blockchain">
        <Blockchain />
      </GridCard>
      <GridCard key="block">
        <Block />
      </GridCard>
      <GridCard key="wallet">
        <Wallet />
      </GridCard>
    </ResponsiveGridLayout>
  );
};

export default UserGrid;
