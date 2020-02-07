import { gql } from "apollo-boost";

const ADMIN_ADDRESS = gql`
query adminAddress {
    bloxx_address(where: {node: {addresses: {balance: {_is_null: true}}}}, limit: 1) {
      nodePublicKey
    }
  }`;

export default ADMIN_ADDRESS;
