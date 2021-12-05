const { gql } = require('apollo-server');

const usuarioTypes = gql `
    type Tokens {
        refresh:String!
        access :String!
    }

    type Access {
        access:String!
    }

    input Refresh {
        refresh:String!
    }

    input CredentialsInput {
        username:String!
        password:String!
    }

    input SignUpInput {
        username:String!
        password:String!
        name    :String!
        email   :String!
        
    }

    type UserDetail{
        id      :Int!
        username:String!
        name    :String!
        email   :String!
    }

    extend type Query {
        userDetailById(userId:Int!):UserDetail!
    }

    extend type Mutation{
        signUpUser(userInput:SignUpInput):Tokens!
        logIn(credentials:CredentialsInput!):Tokens!
        refreshToken(refresh: String!):Access!
        
    }
`;
module.exports = usuarioTypes;