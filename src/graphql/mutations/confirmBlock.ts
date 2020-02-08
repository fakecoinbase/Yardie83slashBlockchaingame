import { gql } from 'apollo-boost';

const CONFIRM_BLOCK = gql`
mutation confirmBlock(
    $blockHash: String 
) {
    update_bloxx_block(where: {blockHash: {_eq: $blockHash}}, _set: {blockStatus: "confirmed"}) {
    affected_rows
  }
  }`;

export default CONFIRM_BLOCK

