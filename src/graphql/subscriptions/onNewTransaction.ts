import { gql } from 'apollo-boost';

const NEW_TRANSACTION_ADDED = gql`
    subscription onNewTransactionAdded {
        bloxx_transaction {
            inputAddress
            outputAddress
            signature
            txHash
            value
            address{
                nodePublicKey
            }
    }
}
`;

export default NEW_TRANSACTION_ADDED;