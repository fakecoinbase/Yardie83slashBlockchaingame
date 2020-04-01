
import { gql } from 'apollo-boost';

const ADMIN_NODE = gql`
query adminNode {
    bloxx_node(where: {admin: {_eq: true}}) {
      privateKey
      publicKey
      addresses {
        id
        balance
      }
    }
  }`;
export default ADMIN_NODE
  