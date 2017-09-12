var express = require('express');
var router = express.Router();
var	mongoose = require('mongoose'),
	employees = require('../models/employeeModel.js'),
	project = require('../models/projectModel.js');
var employeeRoute = require('./employeeRoutes.js');
var projectRoute = require('./projectsRoutes.js');



var routing = () => {
	
	router.use('/projects',projectRoute());
	router.use('/employees',employeeRoute());	

	return router;
};

module.exports = routing;