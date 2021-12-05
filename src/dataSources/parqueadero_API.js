const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class parqueaderoApi extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = serverConfig.parqueadero_api_url;
    }
    async createparqueadero(parking) {
        parking = new Object(JSON.parse(JSON.stringify(parking)));
        return await this.post(`/parking/create/`, parking);
    }
    async getparqueadero(parkingId) {

        return await this.get(`/parking/${parkingId}/`);
    }
    async deleteparqueadero(parkingId) {
        
        return await this.delete(`/parking/delete/${parkingId}/`);
    }
    async updateparqueadero(parking) {
        parking = new Object(JSON.parse(JSON.stringify({ refresh: parking })));
        return await this.put(`/parking/update/${parkingId}/`, parking);
    }
    
}

module.exports = parqueaderoApi;