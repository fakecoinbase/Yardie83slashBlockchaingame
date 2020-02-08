import React, { useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import TransferCoinModal from "../../TopNavbar/AdminControls/TransferCoinModal/TransferCoinModal";
import ResetGameModal from "../../TopNavbar/AdminControls/ResetGameModal/ResetGameModal";
import useAdminModal from "../../../customHooks/useAdminModal/useAdminModal";
import useResetGameModal from "../../../customHooks/useResetGameModal/useResetGameModal";
import { GridCard } from "../DashboardGridStyles";
import { Blockchain, CheckBlock } from "../..";
import { breakpoints, cols } from "../gridLayout";
import useAdminInfo from "../../../customHooks/useAdminInfo";
import { useInsertNodeMutation } from "../../../generated/graphql";
import generateNode from "../../../services/nodeGen";
import Loader from "react-loader-spinner";
import LoadingIndicator from "../../util/LoadingIndicator/LoadingIndicator";

const AdminGrid = (props: any) => {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const [showAdminModal] = useAdminModal();
  const [showResetGameModal] = useResetGameModal();
  const [adminInfo, setAdminInfo] = useAdminInfo();

  const [insertNodeMutation, { loading }] = useInsertNodeMutation();

  useEffect(() => {
    if (adminInfo === undefined || adminInfo === null) {
      const info = generateNode();
      insertNodeMutation({
        variables: { publicKey: info.publicKey, privateKey: info.privateKey, address: info.address }
      })
        .then(res => {
          return {
            privateKey: res!.data!.insert_bloxx_node!.returning[0].privateKey,
            publicKey: res!.data!.insert_bloxx_node!.returning[0].publicKey,
            address: {
              id: res!.data!.insert_bloxx_node!.returning[0].addresses[0].id,
              amount: res!.data!.insert_bloxx_node!.returning[0].addresses[0].balance
            }
          };
        })
        .then(res => {
          setAdminInfo(res);
        });
    }
  }, []);

  return showAdminModal ? (
    <TransferCoinModal adminInfo={adminInfo} />
  ) : showResetGameModal ? (
    <ResetGameModal />
  ) : (
    <ResponsiveGridLayout
      className="layout"
      layouts={props.layout}
      breakpoints={breakpoints}
      cols={cols}
      isDraggable={false}
      margin={[10, 15]}
      rowHeight={125}
      autoSize={true}
    >
      <GridCard key="blockchain">{loading ? <LoadingIndicator /> : <Blockchain admin />}</GridCard>
      <GridCard key="block">
        <CheckBlock admin />
      </GridCard>
    </ResponsiveGridLayout>
  );
};

export default AdminGrid;
