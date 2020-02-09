import React, { useEffect } from "react";
import { Modal as RModal } from "rendition";
import useUserInfo from "../../customHooks/useUserInfo/useUserInfo";
import { useInsertNodeMutation } from "../../generated/graphql";
import generateNode from "../../services/nodeGen";
import LoadingIndicator from "../util/LoadingIndicator/LoadingIndicator";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: Props) => {
  const [userInfo, setUserInfo] = useUserInfo();
  const [insertNodeMutation, { loading }] = useInsertNodeMutation({
    variables: {
      publicKey: "",
      privateKey: "",
      address: ""
    }
  });

  useEffect(() => {
    const info = generateNode();
    insertNodeMutation({
      variables: { publicKey: info.publicKey, privateKey: info.privateKey, address: info.address, balance: 0 }
    })
      .then(res => {
        return {
          privateKey: res.data!.insert_bloxx_node!.returning[0].privateKey,
          publicKey: res.data!.insert_bloxx_node!.returning[0].publicKey,
          address: {
            id: res.data!.insert_bloxx_node!.returning[0].addresses[0].id,
            amount: res.data!.insert_bloxx_node!.returning[0].addresses[0].balance
          }
        };
      })
      .then(userInfo => setUserInfo(userInfo));
  }, []);

  return (
    <RModal
      title={"Welcome to the Bloxx Game"}
      done={() => {
        props.setShowModal(false);
      }}
    >
      {loading ? (
        <LoadingIndicator/>
      ) : (
        <div>
          <p>The following data has been generated for you:</p>
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
      )}
    </RModal>
  );
};

export default Modal;
