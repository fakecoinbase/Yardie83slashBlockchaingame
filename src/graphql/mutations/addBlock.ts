import { gql } from 'apollo-boost';

const ADD_BLOCK = gql`
mutation insertBlock(
    $blockHash: String, 
    $blockNumber: Int,
    $blockStatus: String, 
    $createdAt: timestamp, 
    $difficulty: Int, 
    $merkleRoot: String, 
    $nonce:Int,
    $previousBlockHash: String, 
    $txHash: String
  ) {
    insert_bloxx_block(objects: 
      {
        blockHash: $blockHash, 
        blockNumber: $blockNumber, 
        blockStatus: $blockStatus, 
        createdAt: $createdAt, 
        difficulty: $difficulty, 
        merkleRoot: $merkleRoot, 
        nonce: $nonce, 
        previousBlockHash: $previousBlockHash, 
        }) {
      affected_rows
      returning {
        blockHash
      }
    }
  }`;

export default ADD_BLOCK;