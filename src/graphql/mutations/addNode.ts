import { gql } from 'apollo-boost';

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

export default ADD_NODE