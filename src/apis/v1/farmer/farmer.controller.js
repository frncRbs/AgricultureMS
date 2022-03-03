const { sendResponse, setConnection } = require('server');

class FarmerController {
    /* Request Service */
    async requestService(req, res) {
        const { service } = req.body;

        const response = await farmerService.requestService(service);

        console.log({ response });

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: `Your request for service was successfully sent to the Administrator!`,
        });
    }

    /* Request Props */
    async requestCrop(req, res) {
        const { crop } = req.body;

        const response = await farmerService.requestCrop(crop);

        console.log({ response });

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: `Your request for crops was successfully sent to the Administrator!`,
        });
    }

    /* Request History */
    async viewRequestHistory(req, res) {
        const response = await farmerService.viewRequestHistory();

        console.log({ response });

        return sendResponse({
            res,
            statusCode: 200,
            isSuccess: true,
            message: `You are viewing your request history`,
            data: response,
        });
    }
}

module.exports = FarmerController;
