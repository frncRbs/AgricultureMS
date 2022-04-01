/**
 * @param {Object}
 * @param {Object}
 * @returns {Object}
 */
const filterTruthyObject = (schema, data) => {
    let schemaValues = [];
    let truthyObject = {};
    const assignedSchema = Object.assign(schema, data);

    Object.entries(assignedSchema).forEach((arr) => schemaValues.push(arr));

    const filteredValues = schemaValues.filter((a) => a[1]);

    for (const obj of filteredValues) {
        truthyObject = Object.assign(truthyObject, {
            [obj[0]]: obj[1],
        });
    }

    return truthyObject; // Only get object with truthy values.
};

module.exports = { filterTruthyObject };
