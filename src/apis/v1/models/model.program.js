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
     * @param - Object {identifier}
     * @returns - Array [data]
     */
    static async findAll(table) {
        const sql = `SELECT name, id, optionalType FROM ${table}`;

        const response = await setConnection(sql);

        return response;
    }

    /**
     * @param - Object {data}
     * @returns - Array [data]
     */
    static async insert(table, data) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(data);

        const sql = `INSERT INTO ${table} SET ${toPlaceholder}`;

        const _createdProgram = await setConnection(sql, toObjectValue);

        const response = {
            insertId: _createdProgram.insertId,
            joinTable: async (table, data) => {
                const { toPlaceholder, toObjectValue } = mapObjectKey(data);

                const sql = `INSERT INTO ${table} SET ${toPlaceholder}`;

                const _createdJoinedTable = await setConnection(
                    sql,
                    toObjectValue
                );

                return { insertId: _createdJoinedTable.insertId };
            },
        };

        return response;
    }

    /**
     * @param - @Object identifer
     * @param - @Object data
     * @returns - @Object
     */
    static async updateOne(identifier, data) {
        const { id, table } = identifier;
        const { toPlaceholder, toObjectValue } = mapObjectKey(data);

        const sql = `UPDATE ${table} SET ${toPlaceholder} WHERE id = ${id}`;

        const response = await setConnection(sql, toObjectValue);

        return response;
    }

    /**
     * @param - @Object identifer
     * @returns - @Object
     */
    static async deleteOne(identifer) {
        const { id, table } = identifer;

        const sql = `DELETE FROM ${table} WHERE id = ${id}`;

        const response = await setConnection(sql);

        return response;
    }
}

module.exports = { Program };
