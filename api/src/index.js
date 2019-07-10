var express = require('express');
var userBaseVisitCount = 0;

const PORT = 3333;

const app = express();

app.get('/', (request, response) => {
    userBaseVisitCount++;
    response.send('sa');
});

app.get('/get-count', (request, response) => {
    response.send('count:' + userBaseVisitCount);
});

app.listen(PORT);

console.log('tehlasdasiasdaske');