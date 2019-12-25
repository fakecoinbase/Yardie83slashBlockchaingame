import React, { useEffect } from "react";
import { Modal as RModal } from "rendition";
import useUserInfo from "../../customHooks/useUserInfo";
import { } from "./ModalStyles.js";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const keys = require("../../services/keyGenerator");
const KJUR = require("jsrsasign");
const addressGenerator = require("../../services/addressGen");

const Modal = props => {
  const [userInfo, setUserInfo] = useUserInfo();

  const ADD_NODE = gql`
  mutation insertNode($publicKey: String, $privateKey: String, $address: String ) {
    insert_bloxx_node(objects: {publicKey: $publicKey, privateKey: $privateKey, addresses: {data: {id: $address }}}) {
      affected_rows
      returning {
        publicKey
        privateKey
        addresses {
          id
        }
      }
    }
  }`;

  const NODES = gql`
    query Nodes {
      bloxx_node {
        publicKey
        privateKey
        addresses {
          id
        }
      }
    }`;

  const [addNode] = useMutation(ADD_NODE);

  function generateNode() {
    const pair = keys.keyPair();
    const pubKeyObject = pair[0];
    const publicKey = KJUR.KEYUTIL.getPEM(pubKeyObject);
    const privKeyObject = pair[1];
    const privateKey = KJUR.KEYUTIL.getPEM(privKeyObject, "PKCS8PRV");
    const address = addressGenerator.address(publicKey);
    const info = {
      privateKey,
      publicKey,
      address
    };
    return info;
  }

  useEffect(() => {
    const info = generateNode();
    const result = addNode({ variables: { publicKey: info.publicKey, privateKey: info.privateKey, address: info.address } });
    result.then(res => {
      return {
        privateKey: res.data.insert_bloxx_node.returning[0].privateKey,
        publicKey: res.data.insert_bloxx_node.returning[0].publicKey,
        address: res.data.insert_bloxx_node.returning[0].addresses[0].id
      }
    }).then(userInfo => setUserInfo(userInfo))
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

