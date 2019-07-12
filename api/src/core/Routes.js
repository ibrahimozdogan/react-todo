const Router = require('express').Router();

require('../routes/TodoRoute')(Router);

module.exports = Router;
