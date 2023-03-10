import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_WINS = gql`
     mutation updateWins($id: ID!, $wins: Int!) {
            updateWins(id: $id, wins: $wins) {
                _id
                username
                wins
            }
        }
`;

export const UPDATE_LOSSES = gql`
     mutation updateLosses($id: ID!, $losses: Int!) {
            updateLossess(id: $id, losses: $losses) {
                _id
                username
                losses
            }
        }
`;

export const UPDATE_TIES = gql`
     mutation updateTies($id: ID!, $ties: Int!) {
            updateTies(id: $id, ties: $ties) {
                _id
                username
                ties
            }
        }
`;