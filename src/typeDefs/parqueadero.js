const { gql } = require('apollo-server');

    const parqueaderoTipeDefs = gql `
        type ParkingCreate {
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
        createparqueaero(ParqueaderoCreate: ParkingCreate!): Parking
        updateparqueadero(ParqueaderoActualziar:   parqueaderoloUpdate!): Parking
        deleteparqueadero(parqueaderoId:  String!): String

     }
`;
module.exports = parqueaderoTipeDefs;