import { gql } from 'apollo-boost';

const BLOCKHASH_BY_BLOCKNUMBER = gql`
query blockHashByBlocknumber($blockNumber: Int) {
    bloxx_block(where: {blockNumber: {_eq: $blockNumber}}) {
      blockHash
    }
  }`;

export default BLOCKHASH_BY_BLOCKNUMBER;