const createQueryStatement = require('helpers/queries/query.statements');
const { sendResponse, setConnection } = require('server');
const {
    QUERY_INSERT_FULL_DETAILED_USER_ACCOUNT,
    QUERY_SELECT_USER,
} = require('constants/queries');

class AdminController {
    async createPersonnelAccount(req, res, next) {
        const user = req.body;

        const createPersonnelAccountStatement = createQueryStatement(
            QUERY_INSERT_FULL_DETAILED_USER_ACCOUNT
        );

        const querySelectUser = createQueryStatement(QUERY_SELECT_USER);

        const checkExistingUser = await setConnection(querySelectUser, [
            user.username,
        ]);

        const userFromDatabase = checkExistingUser[0];

        if (checkExistingUser.length) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: 'This account is already exist.',
            });
        }

        if (userFromDatabase.mobileNumber) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: 'This mobile number is already taken.',
            });
        }

        if (userFromDatabase.emailAddress) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: 'This email is already taken.',
            });
        }

        /* Save new user */
        await setConnection(createPersonnelAccountStatement, [...user]);

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: false,
            message: `Personnel's Account successfully created!`,
        });
    }

    async deactiveAccount(req, res, next) {}

    async activateAccount(req, res, next) {}

    async createNewServices(req, res, next) {}

    async createNewCrops(req, res, next) {}

    async listFarmers(req, res, next) {}

    async listPersonnel(req, res, next) {}
}

module.exports = new AdminController();
