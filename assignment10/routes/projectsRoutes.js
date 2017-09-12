var express = require('express');
var router = express.Router();
var project = require('../controllers/projectController.js');

var routing = () => {
	
	router.get('/', project.allProjects)
	router.post('/',project.addProject);

	router.get('/:title',project.getDetails)
	router.delete('/:title',project.removeProject)
	router.put('/:title',project.updateProject);

	return router;
}
module.exports = routing;