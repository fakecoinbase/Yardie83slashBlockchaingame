import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import {
  Nodes,
  Hasher,
  Signature,
  Wallet,
  UnspentTx,
  Mempool,
  Blockchain,
  Block,
  Merkl,
  Modal
} from "../index";
import { Provider } from "rendition";
import { GridCard } from "./DashboardGridStyles";
import { layouts, breakpoints, cols } from "./gridLayout";

const DashboardGrid = () => {
  const [showModal, setShowModal] = useState(true);
  const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <Provider>
      {showModal ? (
        <Modal setShowModal={setShowModal} />
      ) : (
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={breakpoints}
          cols={cols}
          isDraggable={false}
          margin={[10, 15, 10, 20]}
          // FIXME rowHeight should be dynamic; it depends on the window height of each device
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
      )}
    </Provider>
  );
};

export default DashboardGrid;
