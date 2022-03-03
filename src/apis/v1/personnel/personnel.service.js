const User = require('model.user');
const Program = require('model.program');
const { hashPassword } = require('helpers/utils/util.password');

class PersonnelService {
    /* Create Farmer */
    async createFarmerAccount(user) {
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

    /* List of Farmers   */
    async listFarmers(role) {
        const response = await User.findAll(role);

        return response;
    }
}

const personnelService = new PersonnelService();

module.exports = personnelService;
