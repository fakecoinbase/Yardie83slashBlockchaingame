import { gql } from 'apollo-boost';

const BLOCK = gql`
query block($blockHash: String) {
    bloxx_block(where: {blockHash: {_eq: $blockHash}}) {
      blockNumber
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
          addressByInputaddress {
            nodePublicKey
          }
        }
      }
    }
  }`;

export default BLOCK;