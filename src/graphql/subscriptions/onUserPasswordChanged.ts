import { gql } from 'apollo-boost';

const USERPASSWORD_CHANGED = gql`
    subscription onUserPasswordChanged {
        bloxx_userPassword {
        password
        }
}`;


export default USERPASSWORD_CHANGED