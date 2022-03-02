const { setConnection } = require('server');
const mapObjectKey = require('util.map.object-key');

class Program {
    constructor() {}

    /**
     * @param - Object {identifier}
     * @returns - Array [data]
     */
    static async findOne(identifier) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(identifier);

        const sql = `SELECT * FROM programs WHERE ${toPlaceholder}`;

        const response = await setConnection(sql, toObjectValue);

        return response;
    }

    /**
     * @param - Object {data}
     * @returns - Array [data]
     */
    static async insert(data, table) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(data);

        const sql = `INSERT INTO ${table} SET ${toPlaceholder}`;

        const response = await setConnection(sql, toObjectValue);

        return response;
    }

    /**
     * @param - Object {identifier}
     * @param - Object {dataToUpdate}
     * @returns - Array [data]
     */
    static async updateOne(identifier, data) {
        const mappedIdentifier = mapObjectKey(identifier);
        const mappedData = mapObjectKey(data);

        const sql = `UPDATE programs SET ${mappedData.toPlaceholder} WHERE ${mappedIdentifier.toObjectKey} = '${mappedIdentifier.toObjectValue[0]}'`;

        const response = await setConnection(sql, mappedData.toObjectValue);

        return response;
    }
}

module.exports = Program;
