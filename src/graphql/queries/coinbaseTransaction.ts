import { gql } from "apollo-boost";

const COINBASE_TRANSACTION = gql`
query coinbaseTransaction(
    $outputAddress: String
) {
    bloxx_transaction(where: {inputAddress: {_is_null: true}, outputAddress: {_eq: $outputAddress}, blockHash: {_is_null: true}, block: {}}) {
      txHash
    }
  }`;

export default COINBASE_TRANSACTION;