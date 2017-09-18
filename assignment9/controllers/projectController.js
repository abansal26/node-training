var mongoose = require('mongoose'), 
  project = mongoose.model('projects');

exports.allProjects = function(req, res) {
  project.find({}, {'_id' : 0, 'manager' : 0, 'developers' : 0},function(err, result) {
    err != undefined ? res.send(err) : res.send(result);
  });
};

exports.addProject = function(req, res) {
  console.log(req.body);
  var newProject = new project(req.body);
  newProject.save(function(err) {
    err ? res.send(err) : res.send('Succesfully added project');
  });
};

exports.getDetails = function(req, res) {
  var title = req.params.title;
  console.log(title);
  project.findOne({'title' : title}, {'_id': 0}).populate('manager').populate('developers').exec(function(err, result) {
    if (err) res.send(err);
    else if (result == undefined)
    {
      res.send('Invalid title');
    }  
    else {
      res.send(result);
    }
  });
};

exports.removeProject = function(req, res) {
  var title = req.params.title;
  project.remove({'title' : title} , function(err, removed) {
    err ? res.send(err) : res.send(title +' removed');
  });
};

exports.updateProject = function(req, res) {
  var title = req.params.title;
  project.update({'title' : title},req.body , function(err, update) {
  err ? res.send(err) : res.send(title +' updated');
  });
};
