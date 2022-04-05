const { setConnection } = require('server');
const mapObjectKey = require('util.map.object-key');

class Role {
    constructor() {}

    /**
     * @param - Object {identifier}
     * @returns - Object
     */
    static async findOne(identifier) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(identifier);

        const sql = `SELECT role FROM Roles WHERE ${toPlaceholder} LIMIT 1`;

        console.log({ sql });

        const response = await setConnection(sql, toObjectValue);

        return response;
    }

    /**
     * @param - Object {identifier}
     * @returns - Object
     */
    static async create(data) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(data);

        const sql = `INSERT INTO Roles SET ${toPlaceholder}`;

        console.log({ sql });

        const response = await setConnection(sql, toObjectValue);

        return response;
    }
}

module.exports = { Role };