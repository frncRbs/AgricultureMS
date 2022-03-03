const { setConnection } = require('server');
const mapObjectKey = require('util.map.object-key');

/**
 * @desc This class is concerning SQL relational tables. This is responsible for handling a relationship between two or more tables.
 */

class Relation {
    static async insert(data, table) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(data);

        const sql = `INSERT IGNORE INTO ${table} SET ${toPlaceholder}`;

        const response = await setConnection(sql, toObjectValue);

        console.log({ relationResponse: response });

        return response;
    }
}

module.exports = Relation;
