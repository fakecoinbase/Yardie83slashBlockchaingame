import React, { useEffect } from "react";
import { Modal as RModal } from "rendition";
import useUserInfo from "../../customHooks/useUserInfo";
import {} from "./ModalStyles.js";
const keys = require("../../services/keyGenerator");

const Modal = props => {
  const pair = keys.keyPair();
  const pubKey = pair[0];
  const privKey = pair[1];

  const [userInfo, setUserInfo] = useUserInfo();

  useEffect(() => {
    //FIXME put in actual key generator and check with DB if already existing
    const result = Promise.resolve({
      privateKey: "privKey",
      publicKey: "pubKey",
      address: "gervre3403v3"
    });
    result.then(userInfo => {
      setUserInfo(userInfo);
    });
  }, [setUserInfo]);

  return (
    <RModal
      title="Welcome to Bloxx"
      titleDetails="The following data has been generated:"
      done={x => {
        // doneAction(x)
        props.setShowModal(false);
      }}
    >
      <div>
        <p>
          <strong>Private Key: </strong>
          {userInfo.privateKey && userInfo.privateKey}
        </p>
        <p>
          <strong>Public Key: </strong>{" "}
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
