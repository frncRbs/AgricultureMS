const { setConnection } = require('server');
const mapObjectKey = require('util.map.object-key');

/**
 * This is just a custom schema of an object.
 * This schema supports by the function in helpes/utils/util.filter-truthy-object
 */

const UserSchema = {
    firstname: '',
    middlename: '',
    lastname: '',
    mobileNumber: '',
    username: '',
    password: '',
    isActivated: '',
    birthDate: '',
    placeOfBirth: '',

    /* Based on role */
    provincial: '',
    barangay: '',
    municipality: '',
};

class UserMethods {
    constructor() {}

    /**
     * @param - Object {identifier}
     * @returns - Object
     */
    static async findOne(identifier) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(identifier);

        const sql = `SELECT * FROM users WHERE ${toPlaceholder} LIMIT 1`;

        console.log({ sql });

        const user = await setConnection(sql, toObjectValue);

        return user;
    }

    /**
     * @param - Object {identifier}
     * @returns - Array
     */
    static async findAll(identifier) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(identifier);

        const sql = `SELECT * FROM Users WHERE ${toPlaceholder} `;

        console.log({ sql });

        const response = await setConnection(sql, toObjectValue);

        return response;
    }

    /**
     * @param - Object {data}
     * @returns - Object
     */
    static async create(data) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(data);

        const sql = `INSERT IGNORE INTO users SET ${toPlaceholder}`;

        const response = await setConnection(sql, toObjectValue);

        console.log({ createdUser: response });
        /**
         * @param - String table
         * @param - Object {data}
         * @returns - Object
         */
        const user = {
            insertId: response.insertId,
            joinTable: async(table, data) => {
                const { toPlaceholder, toObjectValue } = mapObjectKey(data);

                const sql = `INSERT IGNORE INTO ${table} SET ${toPlaceholder}`;

                await setConnection(sql, toObjectValue);
            },
        };

        return user;
    }

    /**
     * @paramOne - Object {identifier}
     * @paramTwo - Object {dataToUpdate}
     * @returns - Array
     */
    static async updateOne(identifier, data) {
        const mappedIdentifier = mapObjectKey(identifier);
        const mappedData = mapObjectKey(data);

        const sql = `UPDATE users SET ${mappedData.toPlaceholder} WHERE ${mappedIdentifier.toObjectKey} = '${mappedIdentifier.toObjectValue[0]}'`;

        console.log({ sql });

        const response = await setConnection(sql, mappedData.toObjectValue);

        return response;
    }

    /**
     * @paramOne - Object {identifier}
     * @paramTwo - Object {dataToUpdate}
     * @returns - Array
     */
    static async deleteOne(identifier) {
        const mappedIdentifier = mapObjectKey(identifier);

        const sql = `DELETE FROM users WHERE ${mappedIdentifier.toObjectKey} = '${mappedIdentifier.toObjectValue[0]}'`;

        console.log({ sql });

        const response = await setConnection(sql, null);

        return response;
    }

    /**
     * @returns - Object
     */

    static async deleteAll() {
        const sql = `DELETE FROM users`;

        console.log({ sql });

        const response = await setConnection(sql, null);

        return response;
    }
}

module.exports = { UserSchema, User: UserMethods };