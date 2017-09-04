var express = require('express');
var router = express.Router();
var rp = require('request-promise')

router.get('/:idClient',function(req, res){
	var idClient = req.params.idClient;
	var url = 'https://api.createsend.com/api/v3.1/clients/' + idClient + '.json';
	rp.get(url,{
		'auth' : {
			'user' : 'fc96dc9ded698bbfbfb975409a864a42',
			'pass' : 'x'
		}
	})
		.then(function(response){
			res.send(response);
		})
		.catch(function(err){
			console.log("error");
		});
});

module.exports = router;