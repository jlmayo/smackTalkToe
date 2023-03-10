const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        wins: Int
        losses: Int
        ties: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
    }
 
    type Mutation {
       addUser(username: String!, email: String!, password: String!): Auth
       updateUser(username: String! email: String! password: String!): User
       login(email: String!, password: String!): Auth
       updateWins(username: String!, wins: Int!): User
       updateLosses(username: String!, losses: Int!): User
       updateTies(username: String!, ties: Int!): User
}
`;

// export the typeDefs
module.exports = typeDefs;