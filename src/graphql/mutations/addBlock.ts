import { gql } from 'apollo-boost';

const ADD_BLOCK = gql`
mutation insertBlock(
  $blockNumber: Int, 
  $previousBlockHash: String, 
  $createdAt: String, 
  $difficulty: Int, 
  $merkleRoot: String, 
  $nonce: Int, 
  $blockHash:String, 
  $blockStatus: String,
  $block_transactions: bloxx_block_transaction_arr_rel_insert_input,
  ) {
    insert_bloxx_block(
      objects: {
        blockNumber: $blockNumber
        previousBlockHash: $previousBlockHash
        createdAt: $createdAt
        difficulty: $difficulty
        merkleRoot: $merkleRoot
        nonce: $nonce
        blockHash: $blockHash
        blockStatus: $blockStatus
        block_transactions: $block_transactions
      },
      on_conflict: {constraint: block_blockHash_key, update_columns: blockNumber}
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
    }
    }
  }`;

export default ADD_BLOCK;