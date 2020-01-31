import { gql } from 'apollo-boost';

const ADD_BLOCK = gql`
mutation insertBlock(
  $blockNumber: Int, 
  $previousBlockHash: String, 
  $createdAt: timestamp, 
  $difficulty: Int, 
  $merkleRoot: String, 
  $nonce: Int, 
  $blockHash:String, 
  $blockStatus: String, 
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
      }
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