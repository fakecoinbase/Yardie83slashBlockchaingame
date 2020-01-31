import { gql } from 'apollo-boost';

// TODO put in condition not to delete the Genesis block and the admin node
const DELETE_GAMEDATA = gql`
mutation deleteGameData {
    delete_bloxx_transaction(where: {}) {
      affected_rows
    }
    delete_bloxx_address(where: {}) {
      affected_rows
    }
    delete_bloxx_node(where: {}) {
      affected_rows
    }
    delete_bloxx_block(where: {}) {
      affected_rows
    }
    delete_bloxx_block_transaction(where: {}) {
      affected_rows
    }
  }`;

export default DELETE_GAMEDATA;
