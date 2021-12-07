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
        parqueaderoByUsername(nombre: String!): parqueaderoDetail
    }
    extend type Mutation {
        createparqueaero(ParqueaderoCreate: ParkingCreate!): parqueaderoDetail
        updateparqueadero(ParqueaderoActualziar:   parqueaderoloUpdate!): parqueaderoDetail
        deleteparqueadero(parqueaderoId:  String!): String

     }
`;
module.exports = parqueaderoTipeDefs;