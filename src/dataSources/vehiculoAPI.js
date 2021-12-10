const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class vehiculoAPI extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = serverConfig.vehiculo_api_url;
    }
    async createvehiculo(vehiculo) {
        vehiculo = new Object(JSON.parse(JSON.stringify(vehiculo)));
        return await this.post(`/vehiculo`, vehiculo);
    }
    async getvehiculo(placa) {

        return await this.get(`/vehiculo/all/${placa}/`);
    }
    
    async deletevehiculo(placa) {
        
        return await this.delete(`/vehiculo/all/${placa}/`);
    }
    async updatevehiculo(vehiculo) {
        vehiculo = new Object(JSON.parse(JSON.stringify(vehiculo)));
        return await this.put(`/vehiculo/update`, vehiculo);
    }
    
}

module.exports = vehiculoAPI;