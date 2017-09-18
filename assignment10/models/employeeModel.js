var mongoose = require('mongoose');
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
},{collection : 'employees'});
employeeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('employees', employeeSchema);
