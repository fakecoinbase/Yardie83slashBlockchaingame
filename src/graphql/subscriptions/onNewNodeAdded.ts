import { gql } from 'apollo-boost';

const NEW_NODE_ADDED = gql`
    subscription onNewNodeAdded {
        bloxx_node {
            publicKey
            addresses {
                id
            }
        }
    }
`;

export default NEW_NODE_ADDED