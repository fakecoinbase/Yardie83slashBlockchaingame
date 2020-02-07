import { gql } from 'apollo-boost';

const ADD_ADMIN_TRANSACTION = gql`
mutation insertAdminTransactions(
    $transactions: [bloxx_transaction_insert_input!]!
) {
    insert_bloxx_transaction(objects: 
    $transactions) {
      returning {
        blockHash
        inputAddress
        outputAddress
        signature
        text
        txHash
        value
    }
      affected_rows
    }
  }`;

export default ADD_ADMIN_TRANSACTION