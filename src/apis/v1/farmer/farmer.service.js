const User = require('model.user');
const Program = require('model.program');

class FarmerService {
    /* Request Service */
    async requestService(service) {
        const table = 'services';

        const response = await Program.insert({ service }, table);

        return response;
    }

    /* Request Props */
    async requestCrop(crop) {
        const table = 'crops';
        const response = await Program.insert({ crop }, table);

        return response;
    }

    /* Request History */
    async viewRequestHistory(req, res) {
        const table = 'RequestHistory';

        const response = await Program.findAll(table);

        return response;
    }
}

const farmerService = new FarmerService();

module.exports = farmerService;
