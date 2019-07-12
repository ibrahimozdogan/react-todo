const Database = require('../../../../src/core/Database');
const mongoose = require('mongoose');

describe('Database', () => {
    var database;

    beforeEach(() => {
        database = new Database();
    });

    describe('constructor', () => {
        it('should instantiate new database class', function () {
            expect(database).toBeInstanceOf(Database);
            expect(database.connection).toBe(null);
        });
    });

    describe('connect', () => {
        var connectSpy;

        beforeEach(() => {
            connectSpy = jest.spyOn(mongoose, 'connect');
        });

        afterEach(() => {
            connectSpy.mockRestore();
        });

        it('should connect database', () => {
            expect(database.connect()).toBe(mongoose.connection);
            expect(database.connection).not.toBe(null);
            expect(connectSpy).toBeCalledWith('mongodb://mongodb:27017/todo', { 'useNewUrlParser': true });
        });

        it('should not connect database if connection is already opened', () => {
            database.connect();
            expect(database.connect()).toBe(mongoose.connection);
            expect(connectSpy).toHaveBeenCalledTimes(1, 'mongodb://mongodb:27017/todo', { 'useNewUrlParser': true });
        });
    });
});