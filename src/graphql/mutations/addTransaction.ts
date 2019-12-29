import { gql } from 'apollo-boost';

const ADD_TRANSACTION = gql`
mutation insertTransaction(
  $inputAddress: String, 
  $outputAddress: String, 
  $value: Int, 
  $signature: String, 
  $txHash: String
  ) {
  insert_bloxx_transaction(objects: {
    inputAddress: $inputAddress, 
    outputAddress: $outputAddress, 
    value: $value, 
    signature: $signature, 
    txHash: $txHash
    }) {
      affected_rows
      returning {
        inputAddress
        outputAddress
        signature
        txHash
        value
      }
    }
  }`;

export default ADD_TRANSACTION