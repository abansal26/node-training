var express = require('express');
var router = express.Router();
var employee = require('../controllers/employeeController.js');

var routing = () => {
  
  router.get('/',employee.allEmployees)
  router.post('/',employee.addEmployee);

  router.get('/:username',employee.getDetails)
  router.delete('/:username',employee.removeEmployee)
  router.put('/:username',employee.updateEmployee);

  return router;
};

module.exports = routing;