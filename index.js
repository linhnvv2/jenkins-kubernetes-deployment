'use strict';

const express = require('express');

const PORT = process.env.PORT || 8081;

const app = express();

app.get('/', function(req, res) {

    res.send('Express4 Hello World Application k8s cicd!\n');

});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);