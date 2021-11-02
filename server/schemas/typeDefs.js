const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        dates: [MyDate]
    }

    type MyDate {
        _id: ID
        createdAt: String
        username: String
        recipes: [Recipe]
        music: [Music]
    }

    type Music {
        _id: ID
        title: String
        Artist: String
        Genre: String
    }

    type Recipe {
        _id: ID
        name: String
        ingredients: String
        instructions: String
    }

    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        dates(username: String!): [MyDate]
        date(_id: ID!): MyDate
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addDate(datename: String!): MyDate
    }
`;


module.exports = typeDefs;