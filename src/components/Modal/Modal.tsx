import React, { useEffect } from "react";
import { Modal as RModal } from "rendition";
import { useMutation } from "@apollo/react-hooks";
import useUserInfo from "../../customHooks/useUserInfo/useUserInfo";
import generateNode from "../../services/nodeGen";
import { ADD_NODE } from "../../graphql/mutations";
import {} from "./ModalStyles.js";

interface Props {
  setShowModal: (show: boolean) => {};
}

const Modal = (props: Props) => {
  const [userInfo, setUserInfo] = useUserInfo();
  const [addNode] = useMutation(ADD_NODE, {
    context: {
      headers: { HASURA_GRAPHQL_UNAUTHORIZED_ROLE: process.env.HASURA_GRAPHQL_UNAUTHORIZED_ROLE }
    }
  });

  useEffect(() => {
    const info = generateNode();
    const result = addNode({
      variables: { publicKey: info.publicKey, privateKey: info.privateKey, address: info.address }
    });
    result
      .then(res => {
        return {
          privateKey: res.data.insert_bloxx_node.returning[0].privateKey,
          publicKey: res.data.insert_bloxx_node.returning[0].publicKey,
          address: res.data.insert_bloxx_node.returning[0].addresses[0].id
        };
      })
      .then(userInfo => setUserInfo(userInfo));
  }, []);

  return (
    <RModal
      title="Welcome to Bloxx"
      titleDetails="The following data has been generated:"
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
          <strong>Node address: </strong> {userInfo.address && userInfo.address}
        </p>
        <p>You can find this information in the top of the next screen</p>
      </div>
    </RModal>
  );
};

export default Modal;
