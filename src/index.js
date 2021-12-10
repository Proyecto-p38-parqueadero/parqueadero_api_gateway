const {ApolloServer} = require('apollo-server');

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const authentication = require('./utils/autenticacion');
const parqueaderoAPI = require('./dataSources/parqueaderoAPI');
const usuarioAPI = require('./dataSources/usuarioAPI');
const vehiculoAPI = require('./dataSources/vehiculoAPI');

const server = new ApolloServer({
context: authentication,
        typeDefs,
        resolvers,
        dataSources : () => ({
                        parqueaderoAPI : new parqueaderoAPI(),
                        usuarioAPI : new usuarioAPI(),
                        vehiculoAPI   : new vehiculoAPI() 
        }),

        introspection: true,
        playground: true

});

server.listen( process.env.PORT || 4000).then(({url}) =>{ 
console.log(`Server ready at ${(url)}`);
});