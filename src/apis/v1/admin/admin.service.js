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
        let programFromDb = await Program.create(service);
    }
}

const adminService = new AdminService();

module.exports = adminService;
