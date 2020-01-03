import React, { useEffect } from "react";
import { Modal as RModal } from "rendition";
import useUserInfo from "../../customHooks/useUserInfo/useUserInfo";
import { useInsertNodeMutation } from "../../generated/graphql";
import generateNode from "../../services/nodeGen";
import {} from "./ModalStyles.js";

interface Props {
  setShowModal: (show: boolean) => {};
}

const Modal = (props: Props) => {
  const [userInfo, setUserInfo] = useUserInfo();
  const [insertNodeMutation] = useInsertNodeMutation({
    variables: {
      publicKey: "",
      privateKey: "",
      address: ""
    }
  });

  useEffect(() => {
    const info = generateNode();
    insertNodeMutation({
      variables: { publicKey: info.publicKey, privateKey: info.privateKey, address: info.address }
    })
      .then(res => {
        return {
          privateKey: res.data!.insert_bloxx_node!.returning[0].privateKey,
          publicKey: res.data!.insert_bloxx_node!.returning[0].publicKey,
          address: {
            id: res.data!.insert_bloxx_node!.returning[0].addresses[0].id,
            amount: 0
          }
        };
      })
      .then(userInfo => setUserInfo(userInfo));
  }, []);

  return (
    <RModal
      title={"Welcome to the Bloxx Game"}
      titleDetails="The following data has been generated for you:"
      done={() => {
        props.setShowModal(false);
      }}
    >
      <div>
        <p>
          <strong>Private Key: </strong>
          {userInfo.privateKey && userInfo.privateKey}
        </p>
        <p>
          <strong>Public Key: </strong>
          {userInfo.publicKey && userInfo.publicKey}
        </p>
        <p>
          <strong>Node address: </strong> {userInfo.address.id && userInfo.address.id}
        </p>
        <p>
          <strong>You can find this information on top of the next screen</strong>
        </p>
      </div>
    </RModal>
  );
};

export default Modal;
