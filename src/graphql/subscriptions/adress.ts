import { gql } from 'apollo-boost';

const ADDRESS_CHANGE = gql`
subscription address {
    bloxx_address {
      balance
      id
    }
}`;

export default ADDRESS_CHANGE
