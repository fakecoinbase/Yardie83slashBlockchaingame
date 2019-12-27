import { gql } from 'apollo-boost';
/**
 * Inserts a block and updates the "blocknumber" of the included already existing transactions
 * If inserting or updating fails, the entire transaction fails
 */
const ADD_BLOCK = gql`
mutation upsertBlock(
  $objects: [bloxx_block_insert_input!]!) {
    insert_bloxx_block(
      objects:$objects
    )
    {
    affected_rows
    returning {
        blockHash
        blockNumber
        blockStatus
        createdAt
        difficulty
        merkleRoot
        nonce
        previousBlockHash
        transactions {
          blockNumber
          inputAddress
          outputAddress
          signature
          text
          txHash
          value
        }
    }
    }
  }`;

export default ADD_BLOCK;