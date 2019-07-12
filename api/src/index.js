const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./core/Database');
const Routes = require('./core/Routes');
const { PORT } = require('./enums/CommonEnums');

const app = express();
new Database().connect();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use('/', Routes);
app.listen(PORT);
