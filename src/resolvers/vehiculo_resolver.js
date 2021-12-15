

const vehiculoResolver = {

    Query: {

        vehiculoByplaca: async(_, {placa}, {dataSources}) => {
            return await dataSources.vehiculoAPI.getvehiculo(placa);
        }


    },

    Mutation: {

        createvehiculo: async(_, {vehiculo}, {dataSources}) =>{
            
 /*           const vehiculoNuevo = {
                placa      : vehiculo.placa,
                propietario: vehiculo.propietario


            } */
            return await dataSources.vehiculoAPI.createvehiculo(vehiculo);

        },
        updatevehiculo: async(_, {Vehiculoactualizar}, {dataSources}) =>{
                return await dataSources.vehiculoAPI.updatevehiculo(Vehiculoactualizar);

        },
        deletevehiculo: async(_, {vehiculoId}, {dataSources}) =>{
                return await dataSources.vehiculoAPI.deletevehiculo(vehiculoId);

        },
    }



};

module.exports = vehiculoResolver;