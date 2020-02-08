import { gql } from 'apollo-boost';

const CONFIRM_TRANSACTION = gql`
mutation confirmBlockTransaction(
    $txHash: String,
    $blockHash: String 
) {
    update_bloxx_transaction(where: {txHash: {_eq: $txHash}}, _set: {blockHash: $blockHash}) {
      returning {
          blockHash
          inputAddress
          outputAddress
          value
      }
    }
  }`;

export default CONFIRM_TRANSACTION