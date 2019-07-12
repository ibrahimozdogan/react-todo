const model = require('../models/TodoModel');

class TodoRepository {
    /**
     * @param {Todo} todo
     * @returns {object}
     */
    static create (todo) {
        return model.create(todo);
    }

    /**
     * @returns {Array<Todo>}
     */
    static get () {
        return model.find({}).sort({ createdAt: 'desc' });
    }

    /**
     * @param {number} id
     * @param {Todo} todo
     * @returns {object}
     */
    static update (id, todo) {
        return model.findOneAndUpdate({ _id: id }, todo);
    }

    /**
     * @param {number} id
     * @returns {boolean}
     */
    static delete (id) {
        return model.findOneAndRemove({ _id: id });
    }
}

module.exports = TodoRepository;