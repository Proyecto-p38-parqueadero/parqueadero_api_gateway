const {ApolloServer} = require('apollo-server');

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const authentication = require('./utils/autenticacion');
const parqueadero_API = require('./dataSources/parqueadero_API');
const usuario_API = require('./dataSources/usuario_API');
const vehuculo_API = require('./dataSources/vehiculo_API');

const server = new ApolloServer({
context: authentication,
        typeDefs,
        resolvers,
        dataSources : () => ({
                        parqueadero_API : new parqueadero_API(),
                        usuario_API : new usuario_API(),
                        vehuculo_API   : new vehuculo_API() 
        }),

        introspection: true,
        playground: true

});

server.listen( process.env.PORT || 4000).then(({url}) =>{ 
console.log(`Server ready at ${(url)}`);
});