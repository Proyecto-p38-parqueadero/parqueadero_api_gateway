const { gql } = require('apollo-server');

    const vehiculoTipeDefs = gql `
        type vehiculoCreate {
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
            createvehiculo(VehiculoCrear: vehiculoCreate!): vehiculo
            updatevehiculo(Vehiculoactualizar:  vehiculoUpdate!): vehiculo
            deletevehiculo(vehiculoId:  String!): String

            }
`;
module.exports = vehiculoTipeDefs;