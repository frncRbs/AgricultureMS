const { setConnection } = require('server');
const mapObjectKey = require('util.map.object-key');

class PersonnelMethods {
    constructor() {}

    static async findOne(identifier) {}

    static async findAll(identifier) {}

    static async create(data) {}

    static async updateOne(identifier, data) {}

    static async deleteOne(identifier) {}

    static async deleteAll() {}
}

module.exports = { Personnel: PersonnelMethods };
