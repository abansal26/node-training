var express = require('express');
var router = express.Router();
var projectModel = require('./models/project.js');
var projectsSchema = projectModel.projectsSchema();
var project = projectModel.projectConnection();

router.get('/',function(req, res){
  	project.find({}, {'_id' : 0, 'manager' : 0, 'developers' : 0},(err, result) => {
	    if (err != undefined) {
    		res.send(err);
    	}
    	else {
    		res.send(result);
    	}
    });
});

router.post('/addProject',function(req, res){
    console.log(req.body);
    var newProject = new project(req.body);
    newProject.save(function(err) {
        if (err) res.send(err);
        else {
          res.send('Succesfully added project');
        }
    });
});

router.get('/:title',function(req, res){
	var title = req.params.title;
  	console.log(title);
  	project.findOne({'title' : title}, {'_id': 0}).populate('manager').populate('developers').exec(function(err,result){
    	if (err) res.send(err);
    	else if (result == undefined)
    	{
    		res.send('Invalid title');
    	}  
      	else {
        	res.send(result);
        }
  	});
});

router.delete('/remove/:title',function(req, res){
	var title = req.params.title;
  	project.remove({'title' : title} , function(err , removed){
		if (err) throw(err);
      	else {
  			res.send(title +' removed');
  		}
  	});
});

router.put('/update/:title',function(req, res){
  var title = req.params.title;
    project.update({'title' : title},req.body , function(err , update){
  	  	if (err) throw(err);
    	else {
        	res.send(title +' updated');
      	}
    });
});

module.exports = router;