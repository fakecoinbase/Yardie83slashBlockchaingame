import { gql } from 'apollo-boost';

const NODES = gql`
    query Nodes {
      bloxx_node {
        publicKey
        privateKey
        addresses {
          id
        }
      }
    }`;

export default NODES;