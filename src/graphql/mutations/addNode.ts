import { gql } from 'apollo-boost';

const ADD_NODE = gql`
mutation insertNode(
  $publicKey: String, 
  $privateKey: String, 
  $address: String,
  $balance: Int,
  $admin: Boolean ) {
  insert_bloxx_node(objects: {
    publicKey: $publicKey, 
    privateKey: $privateKey,
    admin: $admin,
    addresses: {data: {id: $address, balance: $balance  }}}) {
    affected_rows
    returning {
      publicKey
      privateKey
      addresses {
        id
        balance
      }
    }
  }
}`;

export default ADD_NODE