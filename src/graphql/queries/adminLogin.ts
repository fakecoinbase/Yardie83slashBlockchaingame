import { gql } from 'apollo-boost';

const ADMIN_LOGIN = gql`
query adminLogin($password: String) {
    bloxx_adminPassword(where: {password: {_eq: $password}}) {
      password
    }
}`;

export default ADMIN_LOGIN