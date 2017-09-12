var mongoose = require('mongoose'), 
  employees = mongoose.model('employees')
  project = mongoose.model('projects');

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
  var id = null;

  var removeFromProject = employees.findOne({'username' : username}).exec(function(err,result){
    if (err) return err
    else {
      return result;
    }
  })
    .then(result => {id = result._id})
    .then(result => project.update({'manager' : id},{'manager' : null},{multi : true}).exec(function(err,result){
      if (err) console.log(err);
      else {
        console.log(result);
      }
    }))
    .then(result => project.update({},{$pull :{'developers' : id}},{multi : true}).exec(function(err,result1){
      if (err) console.log(err);
      else {
        console.log(result);
      }
    }))
    .then(result => employee.update({'reportingTo' : id},{'reportingTo' : null},{multi : true}).exec(function(err,result){
      if (err) console.log(err);
      else {
        console.log(result);
      }
    }));
  
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
