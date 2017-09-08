var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var employees = require('./employee.js');
var projects = require('./project.js');

app.use('/employees', employees);
app.use('/projects', projects);

app.listen(3000);