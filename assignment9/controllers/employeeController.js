var mongoose = require('mongoose'), 
  employees = mongoose.model('employees');

exports.allEmployees = function(req, res){
  employees.find({}, {name : 1,username : 1,_id : 0},(err, result) => {
    if (err != undefined) {
      res.send(err);
    }
    else {
    res.send(result);
    }
  });
};

exports.removeEmployee = function(req, res){
  var username = req.params.username;
  employees.remove({'username' : username} , function(err , removed){
    if (err) throw(err);
    else {
      res.send(username +' removed');
    }
  });
};

exports.addEmployee = function(req, res){
  var newEmployee = new employees(req.body);
  newEmployee.save(function(err) {
    if (err) res.send(err);
    else {
      res.send('Succesfully added employee');
    }
  });
};

exports.getDetails = function(req, res){
  var username = req.params.username;
  console.log(username);
  employees.findOne({'username' : username}, {'_id': 0}).populate('reportingTo').exec(function(err,result){
    if (err) res.send(err);
    else {
      res.send(result);
    }
  });
};

exports.updateEmployee = function(req, res){
  var username = req.params.username;
    employees.update({'username' : username},req.body , function(err , update){
      if (err) throw(err);
      else {
        res.send(username +' updated');
      }
    });
  };
