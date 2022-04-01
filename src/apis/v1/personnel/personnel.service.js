const { User } = require('model.user');
const { hashPassword } = require('helpers/utils/util.password');
const { FARMER_ROLE } = require('constants/envs');

class PersonnelService {
    /* Create Farmer */
    async createFarmerAccount(user) {
        const { username, mobileNumber, password } = user;

        const isAlreadyRegistered = await User.findOne({ username });

        const isMobileAlreadyExist = await User.findOne({ mobileNumber });

        const newUser = {
            ...user,
            role: FARMER_ROLE,
            password: hashPassword(password),
        };

        return {
            isAlreadyRegistered,
            isMobileAlreadyExist,
            create: async () => {
                /* Create new user */
                const { insertId } = await User.create(newUser);

                /* Supply and save new user id to role id as a primary key */
                await Role.create({
                    id: insertId,
                    role: FARMER_ROLE,
                });
            },
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
