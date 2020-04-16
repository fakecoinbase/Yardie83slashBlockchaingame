import { gql } from 'apollo-boost';

const ADD_TRANSACTION = gql`
mutation insertTransaction(
  $inputAddress: String, 
  $outputAddress: String, 
  $value: Int, 
  $text: String,
  $signature: String, 
  $txHash: String,
  $timestamp: String
  ) {
    insert_bloxx_transaction(objects: {
    inputAddress: $inputAddress, 
    outputAddress: $outputAddress, 
    value: $value, 
    text: $text,
    signature: $signature, 
    txHash: $txHash,
    timestamp: $timestamp
    }) {
      affected_rows
      returning {
        inputAddress
        outputAddress
        signature
        txHash
        value
        text
      }
    }
  }`;

export default ADD_TRANSACTION