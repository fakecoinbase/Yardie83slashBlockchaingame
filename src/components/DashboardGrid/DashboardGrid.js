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
  Modal,
  CheckBlock
} from "../index";
import { Provider } from "rendition";
import { GridCard } from "./DashboardGridStyles";
import { breakpoints, cols } from "./gridLayout";
import AdminModal from '../TopNavbar/AdminControls/AdminModal/AdminModal'
import useAdminModal from "../../customHooks/useAdminModal/useAdminModal";
import ResetGameModal from "../TopNavbar/AdminControls/ResetGameModal/ResetGameModal";
import useResetGameModal from "../../customHooks/useResetGameModal/useResetGameModal";

const DashboardGrid = (props) => {
  const [showAdminModal] = useAdminModal();
  const [showResetGameModal] = useResetGameModal();
  const [showModal, setShowModal] = useState(true);
  const ResponsiveGridLayout = WidthProvider(Responsive);


  return (
    <Provider>
      {
        props.admin ? showAdminModal ? (
          <AdminModal />
        ) : showResetGameModal ? <ResetGameModal /> : (
          /**
           * IF admin show this
           */
          <ResponsiveGridLayout
            className="layout"
            layouts={props.layout}
            breakpoints={breakpoints}
            cols={cols}
            isDraggable={false}
            margin={[10, 15, 10, 20]}
            rowHeight={125}
            autoSize={true}
          >
            <GridCard key="blockchain">
              <Blockchain admin />
            </GridCard>
            <GridCard key="block">
              <CheckBlock admin />
            </GridCard>
          </ResponsiveGridLayout>
        ) : showModal ? (
          <Modal setShowModal={setShowModal} />
        ) : (
              /**
               * IF user show this
               */
              <ResponsiveGridLayout
                className="layout"
                layouts={props.layout}
                breakpoints={breakpoints}
                cols={cols}
                isDraggable={false}
                margin={[10, 15, 10, 20]}
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
