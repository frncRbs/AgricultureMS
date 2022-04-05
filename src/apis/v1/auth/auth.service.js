const { User } = require('model.user');
const { Role } = require('model.role');
const {
    comparePassword,
    hashPassword,
} = require('helpers/utils/util.password');
const { removeCookie } = require('helpers/utils/util.cookies');
const { FARMER_ROLE } = require('constants/envs');
const { verifyAccessToken } = require('helpers/utils/util.token');
const { filterTruthyObject } = require('helpers/utils/util.truthy-object');
const { getDate } = require('/helpers/utils/util.date');

class AuthService {
    /* Login Service */
    async login({ username, password }) {
        const userFromDatabase = await User.findOne({ username });

        const isPasswordMatch = await comparePassword(username, password);

        return { isPasswordMatch, userFromDatabase };
    }

    /* Register Service */
    async register(user) {
        const { username, password, mobileNumber } = user;

        const isAlreadyRegistered = await User.findOne({ username });

        const isMobileAlreadyExist = await User.findOne({ mobileNumber });

        const newUser = filterTruthyObject({}, {
            ...user,
            role: FARMER_ROLE, // optional, as the default values for this in mysql database was 'farmer'
            password: hashPassword(password),
            createdAt: getDate(),

            /* Ignored from users table */
            position: null,
            confirmPassword: null,
            civilStatus: null,
            religion: null,
            street: null,
            subdivision: null,
            sitio: null,
            barangay: null,
            municipality: null,
            zipCode: null,
        });

        return {
            isAlreadyRegistered,
            isMobileAlreadyExist,
            create: async() => {
                /* Create new user */
                const _createdUser = await User.create(newUser);

                await _createdUser.joinTable('Farmers', {
                    id: _createdUser.insertId,
                    position: user.position,
                    civilStatus: user.civilStatus,
                    religion: user.religion,
                });

                await _createdUser.joinTable('FarmersAddresses', {
                    farmerId: _createdUser.insertId,
                    street: user.street,
                    subdivision: user.subdivision,
                    sitio: user.sitio,
                    barangay: user.barangay,
                    municipality: user.municipality,
                    zipCode: user.zipCode,
                });

                /* Supply and save new user id to role id as a primary key */
                await Role.create({
                    id: _createdUser.insertId,
                    role: FARMER_ROLE,
                });
            },
        };
    }

    /* Logout Service */
    async logout({ accessToken, refreshToken, res }) {
        await removeCookie(res, accessToken);
        await removeCookie(res, refreshToken);
    }

    /* Change Password Service*/
    async changePassword({ accessToken, currentPassword, newPassword, req }) {
        const { isVerified, username } = await verifyAccessToken(accessToken);

        const isPasswordMatch = await comparePassword(
            username,
            currentPassword
        );

        return {
            isVerified,
            isPasswordMatch,
            updatePassword: async() =>
                await User.updateOne({ username }, { password: hashPassword(newPassword) }),
        };
    }
}

const authService = new AuthService();

module.exports = authService;