const { gql } = require('apollo-server');

    const parqueaderoTipeDefs = gql `
        type Parking {
            nombre: String!
            administrador: String!
            telefono: String!
            direccion: String!
            email: String!
            ciudad: String!
        }
        type parqueaderoloUpdate {
            nombre: String!
            administrador: String!
            telefono: String!
            direccion: String!
            email: String!
            ciudad: String!
        }
    extend type Query {
        parqueaderoByUsername(nombre: String!): Parking
    }
    extend type Mutation {
        createparqueaero(Parqueadero: Parking!): Parking
        updateparqueadero(Parqueadero:   parqueaderoloUpdate!): Parking
        deleteparqueadero(parqueaderoId:  String!): String

     }
`;
module.exports = parqueaderoTipeDefs;