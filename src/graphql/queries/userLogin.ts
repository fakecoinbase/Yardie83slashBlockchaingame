import { gql } from 'apollo-boost';

const USER_LOGIN = gql`
query userLogin($password: String) {
    bloxx_userPassword(where: {password: {_eq: $password}}) {
      password
    }
}`;

export default USER_LOGIN