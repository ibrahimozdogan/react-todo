const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./core/Database');
const Routes = require('./core/Routes');
const { PORT } = require('./enums/CommonEnums');

const app = express();
new Database().connect();

// Added for temporary another solution will be checked later
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.json());
app.use('/', Routes);
app.listen(PORT);
