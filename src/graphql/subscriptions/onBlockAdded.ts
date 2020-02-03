import { gql } from 'apollo-boost';

const BLOCK_ADDED = gql`
subscription onBlockAdded {
    bloxx_block {
      blockNumber
      blockHash
      previousBlockHash
      blockStatus
      block_transactions {
        txHash
      }
    }
  }`;

export default BLOCK_ADDED