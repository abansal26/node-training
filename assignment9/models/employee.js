var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/UHG');
var uniqueValidator = require('mongoose-unique-validator');

var employeeSchema = new mongoose.Schema({
	name : {type : String, required : true},
	DOB : {type : Date, required : true},
	gender : {type : String, enum : ["MALE", "FEMALE"], required : true},
	username : {type : String, required : true, unique : true},
	contactno : String,
	address : String,
	reportingTo : {type : mongoose.Schema.Types.ObjectId, ref : 'employees'},
	dateOfJoining : Date
});
employeeSchema.plugin(uniqueValidator);

var employees = connection.model('employees', employeeSchema);

exports.employeeConnection = () => employees;
exports.employeesSchema = () => employeeSchema;