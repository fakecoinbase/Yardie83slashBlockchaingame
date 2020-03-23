import { gql } from 'apollo-boost';

const UPDATE_USERPASSWORD = gql`
mutation updateUserPassword(
    $oldPassword: String,
    $newPassword: String
) {
  update_bloxx_userPassword(where: {password: {_eq: $oldPassword}}, _set: {password: $newPassword}) {
    affected_rows
  }
}`;

export default UPDATE_USERPASSWORD;