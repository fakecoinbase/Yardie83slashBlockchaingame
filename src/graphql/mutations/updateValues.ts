import { gql } from 'apollo-boost';

const UPDATE_ADDRESSVALUES = gql`
mutation updateAddressValues($outAddress: String, $inAddress: String, $amountAdd: Int, $amountSub: Int) {
  updateInputAddress: update_bloxx_address(where: {id: {_eq: $inAddress}}, _inc: {balance: $amountSub}) {
    affected_rows
    returning{
        id
        balance
    }
  }
  updateOutputAddress: update_bloxx_address(where: {id: {_eq: $outAddress}}, _inc: {balance: $amountAdd}) {
    affected_rows
    returning{
        id
        balance
    }
  }
}`;

export default UPDATE_ADDRESSVALUES