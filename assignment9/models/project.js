var mongoose = require('mongoose');
var employees = require('./employee.js');
var employee = employees.employeeConnection();
var uniqueValidator = require('mongoose-unique-validator');

var connection = mongoose.connect('mongodb://localhost:27017/UHG');

var projectSchema = new mongoose.Schema({
	title : {type : String, required : true },
	description : String,
	beginningDate : {type : Date, required : true},
	dueDate : {type : Date, required : true},
	manager : {type : mongoose.Schema.Types.ObjectId, ref : 'employees'},
	developers : [{type : mongoose.Schema.Types.ObjectId, ref : 'employees'}]
});
projectSchema.plugin(uniqueValidator);

var project = connection.model('projects', projectSchema);

exports.projectConnection = () => project;
exports.projectsSchema = () => projectSchema;