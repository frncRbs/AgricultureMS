const adminService = require('admin.service');
const { sendResponse } = require('server');
const { filterTruthyObject } = require('helpers/utils/util.truthy-object');

class AdminController {
    /**
     * @func createPersonnelAccount
     * @desc Controller for creating new personnel/coordinator
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    async createPersonnelAccount(req, res) {
        const user = req.body;

        const { isAlreadyRegistered, isMobileAlreadyExist, create } =
        await adminService.createPersonnelAccount(user);

        if (isAlreadyRegistered.length) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: 'This username is already exist.',
            });
        }

        if (isMobileAlreadyExist.length) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: 'This mobile number is already taken.',
            });
        }

        /* Save new user */
        await create();

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: `Personnel's account successfully created!`,
        });
    }

    /**
     * @func deactiveAccount
     * @desc Controller for deactivating users account
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    async deactiveAccount(req, res) {
        const { id } = req.body;

        if (!id) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: false,
                message: `Undefined user.`,
            });
        }

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
            isSuccess: true,
            message: `This account was successfully Deactivated!`,
        });
    }

    /**
     * @func activateAccount
     * @desc Controller for activating users account
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
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
            isSuccess: true,
            message: `This account was successfully Activated!`,
        });
    }

    /**
     * @func changeRole
     * @desc Controller for updating personnels/coordinators role
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    async changeRole(req, res) {
        const { id, role } = req.body;

        const { save, isUserExist } = await adminService.changeRole(id, role);

        if (!isUserExist) {
            return sendResponse({
                res,
                statusCode: 400,
                isSuccess: true,
                message: `There is no user with this id ${id}`,
            });
        }

        await save();

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: `The role of this user has been successfuly updated!`,
        });
    }

    /**
     * @func createNewProgram
     * @desc Controller for creating new program (services, crops)
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    async createNewProgram(req, res) {
        const { type, id, program } = req.body;

        const identifier = { table: type, adminId: id };

        const response = await adminService.createNewProgram(
            identifier,
            program
        );

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: `New program successfully created!`,
            data: response,
        });
    }

    /**
     * @func updateProgram
     * @desc Controller for updating single program(service, crop)
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    async updateProgram(req, res) {
        const { identifier, program } = req.body;

        const response = await adminService.updateProgram({ table: identifier['type'], id: identifier['id'] }, {
            name: program,
        });

        return sendResponse({
            res,
            statusCode: 200,
            isSuccess: true,
            message: `${program} successfully updated!`,
            data: response,
        });
    }

    /**
     * @func deleteProgram
     * @desc Controller for updating single program(service, crop)
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    async deleteProgram(req, res) {
        const identifier = req.body;

        const response = await adminService.deleteProgram({
            table: identifier['type'],
            id: identifier['id'],
        });

        return sendResponse({
            res,
            statusCode: 200,
            isSuccess: true,
            message: `Deleted Successfully!`,
            data: response,
        });
    }

    /**
     * @func listUsers
     * @desc Controller for getting all users based on role
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    async listUsers(req, res) {
        const { role } = req.body;

        const response = await adminService.listUsers({ role });

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: `Farmers Successfullly Retrieved!`,
            data: response,
        });
    }

    /**
     * @func listPrograms
     * @desc Controller for getting all programs
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    async listPrograms(req, res) {
        const { type } = req.body;

        const response = await adminService.listPrograms(type);

        return sendResponse({
            res,
            statusCode: 200,
            isSuccess: true,
            message: `Programs Successfullly Retrieved!`,
            data: response,
        });
    }

    /**
     * @func getNotifications
     * @desc Controller for getting notifications
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    async getNotifications(req, res) {
        const response = await adminService.getNotifications();

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: `Farmers Successfullly Retrieved!`,
            data: response,
        });
    }
}

module.exports = new AdminController();