import { gql } from 'apollo-boost';

const TRANSACTIONS = gql`
query Transactions {
    __typename
    bloxx_transaction {
      inputAddress
      outputAddress
      text
      txHash
      value
    }
  }`;

export default TRANSACTIONS