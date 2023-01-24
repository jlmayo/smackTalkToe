import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getUser ($userId: ID!) {
        user(userId: $userId) {
            username
            email
            wins
            losses
            ties
        }
    }
`;