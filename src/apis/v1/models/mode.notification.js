const { setConnection } = require('server');
const mapObjectKey = require('util.map.object-key');

class Notification {
    constructor() {}

    /**
     * @param - Object {identifier}
     * @returns - Array
     */
    static async findAll(identifier) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(identifier);

        const sql = `SELECT * FROM notifications WHERE ${toPlaceholder} LIMIT 1`;

        console.log({ sql });

        const response = await setConnection(sql, toObjectValue);

        return response;
    }
}

module.exports = { Notification };
