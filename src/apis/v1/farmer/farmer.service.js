const { User } = require('model.user');
const { Program } = require('model.program');

class FarmerService {
    /* Request Service */
    static async requestService(service) {
        const table = 'services';

        const response = await Program.insert({ service }, table);

        return response;
    }

    /* Request Props */
    static async requestCrop(crop) {
        const table = 'crops';
        const response = await Program.insert({ crop }, table);

        return response;
    }

    /* Request History */
    static async viewRequestHistory(req, res) {
        const table = 'RequestHistory';

        const response = await Program.findAll(table);

        return response;
    }
}

module.exports = FarmerService;
