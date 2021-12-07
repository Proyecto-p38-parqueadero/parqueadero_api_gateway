const { gql } = require('apollo-server');

    const vehiculoTipeDefs = gql `
        input  vehiculoCreate {
            placa: String!
            propietario: String!
            
        }
        input  vehiculoUpdate {
            placa: String!
            propietario: String!
        }
        type  vehiculoDetail {
            placa: String!
            propietario: String!
        }

        extend type Query {
            vehiculoByplaca(placa: String!): vehiculoDetail
        }
        extend type Mutation {
            createvehiculo(VehiculoCrear: vehiculoCreate!): vehiculoDetail
            updatevehiculo(Vehiculoactualizar:  vehiculoUpdate!): vehiculoDetail
            deletevehiculo(vehiculoId:  String!): String

            }
`;
module.exports = vehiculoTipeDefs;