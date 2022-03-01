const adminService = require('admin.service');
const { sendResponse } = require('server');

class AdminController {
    /* Create Personnel */
    async createPersonnelAccount(req, res) {
        const user = req.body;

        const {
            isAlreadyRegistered,
            isMobileAlreadyExist,
            isEmailAlreadyExist,
            create,
        } = await adminService.createPersonnel({
            ...user,
        });

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
            isSuccess: false,
            message: `Personnel's account successfully created!`,
        });
    }

    /* Deactivate Account */
    async deactiveAccount(req, res) {
        const { id } = req.body;

        const { save, isUserExist } = await adminService.deactiveAccount(id);

        if (!isUserExist) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: `There is no user with this id ${id}`,
            });
        }

        await save();

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: false,
            message: `This account was successfully Deactivated!`,
        });
    }

    /* Activate Account */
    async activateAccount(req, res) {
        const { id } = req.body;

        const { save, isUserExist } = await adminService.activateAccount(id);

        if (!isUserExist) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: `There is no user with this id ${id}`,
            });
        }

        await save();

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: false,
            message: `This account was successfully Activated!`,
        });
    }

    /* Change Role */
    async changeRole(req, res) {
        const { id, role } = req.body;

        const { save, isUserExist } = await adminService.changeRole(id, role);

        if (!isUserExist) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: `There is no user with this id ${id}`,
            });
        }

        await save();

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: false,
            message: `The role of this user has been successfuly updated!`,
        });
    }

    async createNewService(req, res) {
        const { service } = req.body;

        const {} = await adminService.createNewService(service);
    }

    async createNewCrop(req, res) {}

    async listFarmers(req, res) {}

    async listPersonnel(req, res) {}
}

module.exports = new AdminController();
