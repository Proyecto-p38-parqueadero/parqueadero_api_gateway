const parqueaderoResolver = require('./parqueadero_resolver');
const usuarioResolver = require('./usuario_resolver');
const vehiculoResolver = require('./vehiculo_resolver');
const lodas = require('lodash');

const resolvers = lodas.merge(parqueaderoResolver,usuarioResolver,vehiculoResolver);
module.exports = resolvers;