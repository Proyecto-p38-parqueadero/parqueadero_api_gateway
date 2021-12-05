const { gql } = require('apollo-server');

    const vehiculoTipeDefs = gql `
        type vehiculo {
            placa: String!
            propietario: String!
            
        }
        type vehiculoUpdate {
            placa: String!
            propietario: String!
        }

        extend type Query {
            vehiculoByplaca(placa: String!): vehiculo
        }
        extend type Mutation {
            createvehiculo(Vehiculo: vehiculo!): vehiculo
            updatevehiculo(Vehiculo:  vehiculoUpdate!): vehiculo
            deletevehiculo(vehiculoId:  String!): String

            }
`;
module.exports = vehiculoTipeDefs;