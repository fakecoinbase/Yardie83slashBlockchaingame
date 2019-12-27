import { gql } from 'apollo-boost';

const ADD_TRANSACTION = gql`
mutation insertTransaction($inputAddress: String, $outputAddress: String, $value: Int, $txHash: String) {
    insert_bloxx_transaction(objects: {inputaddress: $inputAddress, outputAddress: $outputAddress, value: $value, txHash: $txHash}) {
      affected_rows
      returning {
        inputaddress
        outputAddress
        txHash
        value
      }
    }
  }`;

  export default ADD_TRANSACTION