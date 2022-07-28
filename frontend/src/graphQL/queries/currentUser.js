import { gql } from '@apollo/client';

const currentUser = gql`
    query currentUser {
        currentUser {
            name
            email
            role
        }
    }
`;

export default currentUser;
