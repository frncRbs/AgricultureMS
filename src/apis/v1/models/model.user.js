const { setConnection } = require('server');
const mapObjectKey = require('util.map.object-key');

/**
 * This is just a custom schema of an object.
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
        let sql = ``;

        if (toObjectValue[0] === 'all') sql = `SELECT * FROM Users`;
        else sql = `SELECT * FROM Users WHERE ${toPlaceholder} `;

        console.log({ sql });

        const response = await setConnection(sql, toObjectValue);

        const user = {
            response,
            joinTable: async (lookupTable) => {
                const { toPlaceholder, toObjectValue } =
                    mapObjectKey(lookupTable);

                const sql = `SELECT * FROM users AS u JOIN ${toObjectValue}s AS lt ON u.id = lt.id`;

                return await setConnection(sql);
            },
        };

        return user;
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
            joinTable: async (table, data) => {
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
        console.log({ identifier, data });
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
