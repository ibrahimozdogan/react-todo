const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    content: { type: String, required: true },
    status: { type: Number, required: true },
    color: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('TodoList', Schema, 'TodoList');