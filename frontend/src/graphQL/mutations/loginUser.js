import { gql } from '@apollo/client';

const loginUser = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            name
            email
            role
        }
    }
`;

export default loginUser;
