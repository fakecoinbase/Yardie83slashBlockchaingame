import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Scrollbars from 'react-custom-scrollbars';
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
        <GridCard key="nodes" >
          <Scrollbars style={{ minHeight: 400, height: 400, maxHeight: '100%' }}>
            <Nodes />
          </Scrollbars>
        </GridCard>
        <GridCard key="hasher">
          <Scrollbars style={{ minHeight: 250, height: 250, maxHeight: '100%' }}>
            <Hasher />
          </Scrollbars>
        </GridCard>
        <GridCard key="signature">
          <Scrollbars style={{ minHeight: 250, height: 250, maxHeight: '100%' }}>
            <Signature />
          </Scrollbars>
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
