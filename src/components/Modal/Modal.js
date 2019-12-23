import React, { useEffect } from "react";
import { Modal as RModal } from "rendition";
import useUserInfo from "../../customHooks/useUserInfo";
import {} from "./ModalStyles.js";
const keys = require("../../services/keyGenerator");
const KJUR = require("jsrsasign");

const Modal = props => {
  const [userInfo, setUserInfo] = useUserInfo();

  useEffect(() => {
    //TODO: ALI can you move this logic somewhere else and just return the info object??
    const pair = keys.keyPair();
    const pubKeyObject = pair[0];
    const pubKey = KJUR.KEYUTIL.getPEM(pubKeyObject);

    const privKeyObject = pair[1];
    const privKey = KJUR.KEYUTIL.getPEM(privKeyObject, "PKCS8PRV");

    const info = {
      privateKey: privKey,
      publicKey: pubKey,
      address: "whatever"
    };
    setUserInfo(info);
  }, []);

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
