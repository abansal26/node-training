var mongoose = require('mongoose');
var employees = require('./employeeModel.js');
var uniqueValidator = require('mongoose-unique-validator');

var projectSchema = new mongoose.Schema({
  title : {type : String, required : true },
  description : String,
  beginningDate : {type : Date, required : true},
  dueDate : {type : Date, required : true},
  manager : {type : mongoose.Schema.Types.ObjectId, ref : 'employees'},
  developers : [{type : mongoose.Schema.Types.ObjectId, ref : 'employees'}]
},{collection : 'projects'});
projectSchema.plugin(uniqueValidator);

module.exports = mongoose.model('projects', projectSchema);

