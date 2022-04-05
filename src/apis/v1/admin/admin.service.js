const { UserSchema, User } = require('model.user');
const { Role } = require('model.role');
const { Program } = require('model.program');
const { hashPassword } = require('helpers/utils/util.password');
const { filterTruthyObject } = require('helpers/utils/util.truthy-object');
const { PERSONNEL_ROLE } = require('constants/envs');
const { getDate } = require('../../../helpers/utils/util.date');

class AdminService {
    /**
     * @func createPersonnelAccount
     * @desc Service for creating new personnel/coordinator
     * @param {Oject} user
     * @returns {Object}
     */
    async createPersonnelAccount(user) {
        const { username, mobileNumber, password } = user;

        const isAlreadyRegistered = await User.findOne({ username });

        const isMobileAlreadyExist = await User.findOne({ mobileNumber });

        const newUser = filterTruthyObject(
            {},
            {
                ...user,
                role: PERSONNEL_ROLE,
                password: hashPassword(password),
                createdAt: getDate(),
                position: null, // removes positon
                confirmPassword: null,
                provincial: null,
                barangay: null,
                municipality: null,
            }
        );

        return {
            isAlreadyRegistered,
            isMobileAlreadyExist,
            create: async () => {
                /* Create new user */
                const _createdUser = await User.create(newUser);

                await _createdUser.joinTable('Personnels', {
                    id: _createdUser.insertId,
                    position: user.position,
                });

                await _createdUser.joinTable('PersonnelsAddresses', {
                    personnelId: _createdUser.insertId,
                    provincial: user.provincial,
                    barangay: user.barangay,
                    municipality: user.municipality,
                });

                /* Supply and save new user id to role id as a primary key */
                await Role.create({
                    id: _createdUser.insertId,
                    role: PERSONNEL_ROLE,
                });
            },
        };
    }

    /**
     * @func setAccountStatus
     * @desc Service for deactivating and activating users account
     * @param {String} id
     * @returns {Object}
     */
    async setAccountStatus(id, isActivated) {
        let isUserExist = false;

        let userFromDb = await User.findOne({ id });

        if (Object.entries(userFromDb).length) {
            isUserExist = true;
        }

        return {
            isUserExist,
            save: async () =>
                await User.updateOne(
                    { id },
                    { isActivated: Number(isActivated) }
                ),
        };
    }

    /**
     * @func changeRole
     * @desc Service for updating personnels/coordinators role
     * @param {String} id
     * @param {String} role
     * @returns {Object}
     */
    async changeRole(id, role) {
        let isUserExist = false;

        let userFromDb = await User.findOne({ id });

        if (Object.entries(userFromDb).length) {
            isUserExist = true;
        }

        return {
            isUserExist,
            save: async () => await User.updateOne({ id }, { role }),
        };
    }

    /**
     * @func createNewProgram
     * @desc Service for creating new program (services, crops)
     * @param {String} table
     * @param {Object} program
     * @returns {Object}
     */
    async createNewProgram(identifier, program) {
        const { adminId, table } = identifier;

        const _createdProgram = await Program.insert(table, { name: program });

        const _createdNewTable = await _createdProgram.joinTable('Programs', {
            [`${table.slice(0, -1)}Id`]: _createdProgram.insertId,
        });

        // await _createdProgram.joinTable('Admins', {
        //     id: adminId,
        // });

        return _createdProgram;
    }

    /**
     * @func listPrograms
     * @desc Service to list all programs based on program (services, crops)
     * @param {String} program
     * @returns {Array}
     */
    async listPrograms(program) {
        const _programs = await Program.findAll(program);

        return _programs;
    }

    /**
     * @func updateProgram
     * @desc Service for updating single program(service, crop)
     * @param {String} table
     * @param {Object} data
     * @returns {Object}
     */
    async updateProgram(identifier, program) {
        const response = await Program.updateOne(identifier, program);

        return response;
    }

    /**
     * @func deleteProgram
     * @desc Service for deleting single program(service, crop)
     * @param {Object} identifier
     * @returns {Object}
     */
    async deleteProgram(identifer) {
        const response = await Program.deleteOne(identifer);

        return response;
    }

    /**
     * @func listUsers
     * @desc Service for getting all users based on role
     * @param {String} role
     * @returns {Object}
     */
    async listUsers(role) {
        const response = await User.findAll(role);

        return response;
    }

    /**
     * @func getNotifications
     * @desc Service for getting notifications
     * @returns {Object}
     */
    async getNotifications() {
        const response = await Notification.findAll();

        return response;
    }
}

const adminService = new AdminService();

module.exports = adminService;
