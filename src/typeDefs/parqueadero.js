const { gql } = require('apollo-server');

    const parqueaderoTipeDefs = gql `
        
        input ParkingCreate {
            nombre: String!
            administrador: String!
            telefono: String!
            direccion: String!
            email: String!
            ciudad: String!
        }

        
        input parqueaderoloUpdate {
            id: Int!
            nombre: String!
            administrador: String!
            telefono: String!
            direccion: String!
            email: String!
            ciudad: String!
        }

        type parqueaderoDetail{

            
            nombre: String!
            administrador: String!
            telefono: String!
            direccion: String!
            email: String!
            ciudad: String!

        }
    extend type Query {
        parqueaderoByUsername(id: Int!): parqueaderoDetail
    }
    extend type Mutation {
        createparqueaero(ParqueaderoCreate: ParkingCreate!): parqueaderoDetail
        updateparqueadero(ParqueaderoActualziar:  parqueaderoloUpdate!): parqueaderoDetail
        deleteparqueadero(parqueaderoId:  Int!): String

     }
`;
module.exports = parqueaderoTipeDefs;