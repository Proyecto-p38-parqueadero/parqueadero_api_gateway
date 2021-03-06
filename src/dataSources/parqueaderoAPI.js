const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class parqueaderoAPI extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = serverConfig.parqueadero_api_url;
    }
    async createparqueadero(parking) {
        parking = new Object(JSON.parse(JSON.stringify(parking)));
        return await this.post(`/parking/create/`, parking);
    }
    async getparqueadero(id) {

        return await this.get(`/parking/${id}/`);
    }
    async deleteparqueadero(parqueaderoId) {
        
        return await this.delete(`/parking/delete/${parqueaderoId}/`);
    }
    async updateparqueadero(id,parqueaderoUpdate) {
        parqueaderoUpdate = new Object(JSON.parse(JSON.stringify(parqueaderoUpdate)));
        
        return await this.put(`/parking/update/${id}/`, parqueaderoUpdate);
    }
    
}

module.exports = parqueaderoAPI;