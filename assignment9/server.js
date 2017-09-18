var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  employees = require('./models/employeeModel.js'),
  project = require('./models/projectModel.js'),
  bodyParser = require('body-parser');
var employeeRoute = require('./routes/employeeRoutes.js');
var projectRoute = require('./routes/projectsRoutes.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/UHG')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : true}));
app.use('/employees', employeeRoute());
app.use('/projects', projectRoute());

app.listen(3000);