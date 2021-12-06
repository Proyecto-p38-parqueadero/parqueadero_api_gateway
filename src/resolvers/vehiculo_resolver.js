

const vehiculoResolver = {

    Query: {

        vehiculoByplaca: async(_, {placa}, {dataSources}) => {
            return await dataSources.vehiculoApi.getvehiculo(placa);
        }


    },

    Mutation: {

        createvehiculo: async(_, {VehiculoCrear}, {dataSources}) =>{
            
            const vehiculoNuevo = {
                placa: VehiculoCrear.placa,
                propietario: VehiculoCrear.propietario


            } 
            return await dataSources.vehiculoApi.createvehiculo(vehiculoNuevo);

        },
        updatevehiculo: async(_, {Vehiculoactualizar}, {dataSources}) =>{
                return await dataSources.vehiculoApi.updatevehiculo(Vehiculoactualizar);

        },
        deletevehiculo: async(_, {vehiculoId}, {dataSources}) =>{
                return await dataSources.vehiculoApi.deletevehiculo(vehiculoId);

        },
    }



};

module.exports = vehiculoResolver;