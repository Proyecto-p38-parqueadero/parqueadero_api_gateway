const parqueaderoResolver = { 

    Query: {

        parqueaderoByUsername: async(_, {nombre},{dataSources} ) => { 
            return await dataSources.parqueaderoApi.getparqueadero(nombre);
            }
  
      
        },

    Mutation: {

        createparqueaero: async(_,{ParqueaderoCreate}, {dataSources}) => {

            const parqueaderoCrear = {
                
                nombre: ParqueaderoCreate.nombre, 
                administrador: ParqueaderoCreate.administrador,
                telefono: ParqueaderoCreate.telefono,
                direccion: ParqueaderoCreate.direccion,
                email: ParqueaderoCreate.email,
                ciudad: ParqueaderoCreate.ciudad
                
            } 
           return await dataSources.parqueaderoApi.parqueaderoCrear(parqueaderoCrear);
  
      },


        updateparqueadero: async(_, {ParqueaderoActualziar}, {dataSources}) => {
            return await dataSources.parqueaderoApi.updateparqueadero(ParqueaderoActualziar);

        },

        deleteparqueadero: async(_, {parqueaderoId}, {dataSources}) => {
            return await dataSources.parqueaderoApi.deleteparqueadero(parqueaderoId);

        }
    }   

};

module.exports = parqueaderoResolver;