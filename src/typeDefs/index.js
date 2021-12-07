// call all typeDefs m
const usuarioTypes        = require("./usuario")
const vehiculoTipeDefs     = require('./vehiculo')
const parqueaderoTipeDefs = require('./parqueadero')

const schemaArrays = [usuarioTypes, vehiculoTipeDefs, parqueaderoTipeDefs]
module.exports     = schemaArrays
