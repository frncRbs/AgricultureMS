const { sendResponse, setConnection } = require('server');
const personnelService = require('personnel.service');

class PersonnelController {
    /* Create Farmer */
    async createFarmerAccount(req, res) {
        const { user } = req.body;

        const {
            isAlreadyRegistered,
            isMobileAlreadyExist,
            isEmailAlreadyExist,
            create,
        } = await personnelService.createFarmerAccount(user);

        if (isAlreadyRegistered) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: 'This username is already exist.',
            });
        }

        if (isMobileAlreadyExist) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: 'This mobile number is already taken.',
            });
        }

        if (isEmailAlreadyExist) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: 'This email is already taken.',
            });
        }

        /* Save new user */
        await create();

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: `Farmer's account successfully created!`,
        });
    }

    /* List of Farmers  */
    async listFarmers(req, res) {
        const response = await personnelService.listFarmers();

        console.log({ role, response });

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: `Farmers Successfullly Retrieved!`,
            data: response,
        });
    }
}

module.exports = PersonnelController;
