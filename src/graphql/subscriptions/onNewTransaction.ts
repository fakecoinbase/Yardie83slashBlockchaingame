import { gql } from 'apollo-boost';

const NEW_TRANSACTION_ADDED = gql`
    subscription onNewTransactionAdded {
        bloxx_transaction {
            inputaddress
            outputAddress
            txHash
            value
    }
}
`;

export default NEW_TRANSACTION_ADDED;