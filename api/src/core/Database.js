const { HOST, PORT, DATABASE_NAME } = require('../enums/DatabaseEnums');
const mongoose = require('mongoose');

class Database {
    constructor () {
        this.connection = null;
    }

    connect () {
        if (!this.connection) {
            mongoose.connect(`mongodb://${HOST}:${PORT}/${DATABASE_NAME}`, { useNewUrlParser: true });

            this.connection = mongoose.connection;
        }

        return this.connection;
    }
}

module.exports = Database;