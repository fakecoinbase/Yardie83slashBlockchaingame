import { gql } from 'apollo-boost';

const BLOCK = gql`
query block($blockHash: String) {
    bloxx_block(where: {blockHash: {_eq: $blockHash}}) {
      blockNumber
      blockStatus
      previousBlockHash
      merkleRoot
      difficulty
      createdAt
      nonce
      blockHash
      block_transactions {
        transaction {
          inputAddress
          outputAddress
          signature
          value
          timestamp
          text
          txHash
          address{
            nodePublicKey
          }
          addressByInputaddress {
            nodePublicKey
          }
        }
      }
    }
  }`;

export default BLOCK;