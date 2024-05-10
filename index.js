'use strict';

const express = require('express');

const PORT = process.env.PORT || 8081;

const app = express();

app.get('/', function(req, res) {

    res.send('Express3 Hello World Application!\n');

});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);