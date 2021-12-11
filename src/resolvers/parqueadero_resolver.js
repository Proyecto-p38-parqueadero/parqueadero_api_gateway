const parqueaderoResolver = { 

    Query: {

        parqueaderoByUsername: async(_, {id},{dataSources} ) => { 
            return await dataSources.parqueaderoAPI.getparqueadero(id);
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
           return await dataSources.parqueaderoAPI.createparqueadero(parqueaderoCrear);
  
      },


        updateparqueadero: async(_, {parqueaderoUpdate}, {dataSources}) => {
            
            const cambio = {
                
                "nombre": parqueaderoUpdate.nombre, 
                "administrador": parqueaderoUpdate.administrador,
                "telefono": parqueaderoUpdate.telefono,
                "direccion": parqueaderoUpdate.direccion,
                "email": parqueaderoUpdate.email,
                "ciudad": parqueaderoUpdate.ciudad
                
            } 
            return await dataSources.parqueaderoAPI.updateparqueadero(parqueaderoUpdate.id,cambio);


        },

        deleteparqueadero: async(_, {parqueaderoId}, {dataSources}) => {
            return await dataSources.parqueaderoAPI.deleteparqueadero(parqueaderoId);

        }
    }   

};

module.exports = parqueaderoResolver;