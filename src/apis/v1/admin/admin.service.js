const User = require('model.user');
const Program = require('model.program');
const { hashPassword } = require('helpers/utils/util.password');

class AdminService {
    /* Create Personnel */
    async createPersonnel(user) {
        const { username, mobileNumber, emailAddress, password } = user;

        const isAlreadyRegistered = await User.findOne({ username });
        const isMobileAlreadyExist = await User.findOne({ mobileNumber });
        const isEmailAlreadyExist = await User.findOne({ emailAddress });

        const newUser = { ...user, password: hashPassword(password) };

        return {
            isAlreadyRegistered: isAlreadyRegistered.length,
            isMobileAlreadyExist: isMobileAlreadyExist.length,
            isEmailAlreadyExist: isEmailAlreadyExist.length,
            create: async () => await User.create(newUser),
        };
    }

    /* Deactivate Account */
    async deactiveAccount(id) {
        let isUserExist = false;

        let userFromDb = await User.findOne({ id });

        if (userFromDb.length) {
            isUserExist = true;
        }

        return {
            isUserExist,
            save: async () => await User.updateOne({ id }, { isActivated: 0 }),
        };
    }

    /* Activate Account */
    async activateAccount(id) {
        let isUserExist = false;

        let userFromDb = await User.findOne({ id });

        if (userFromDb.length) {
            isUserExist = true;
        }

        return {
            isUserExist,
            save: async () => await User.updateOne({ id }, { isActivated: 1 }),
        };
    }

    /* Change Role */
    async changeRole(id, role) {
        let isUserExist = false;

        let userFromDb = await User.findOne({ id });

        if (userFromDb.length) {
            isUserExist = true;
        }

        return {
            isUserExist,
            save: async () => await User.updateOne({ id }, { role }),
        };
    }

    /* Create New Service*/
    async createNewService(service) {
        const table = 'services';
        const response = await Program.insert(service, table);

<<<<<<< HEAD
        return response;
=======
>>>>>>> 5b03664c168a6cad21061af79c73ff7c61c2cc17
    }

    /* Create New Crop*/
    async createNewCrop(service) {
        const table = 'crops';
        let response = await Program.insert(service, table);

        return response;
    }

    /* List of Farmers and Personnels  */
    async listUsers(role) {
        const response = await User.findAll(role);

        return response;
    }

    /* Notification */
    async getNotifications(req, res) {
        const response = await Notification.findAll();

        return response;
    }
}

const adminService = new AdminService();

module.exports = adminService;
