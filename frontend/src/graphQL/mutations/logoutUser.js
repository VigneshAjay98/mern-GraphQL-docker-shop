import { gql } from '@apollo/client';

const logoutUser = gql`
    mutation {
        logout {
            name
            email
            role
        }
    }
`;

export default logoutUser;
