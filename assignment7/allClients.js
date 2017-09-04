var express = require('express');
var router = express.Router();
var rp = require('request-promise')

router.get('/',function(req, res){
	var url = ('https://api.createsend.com/api/v3.1/clients.json');
	rp.get(url,{
		'auth' : {
			'user' : 'fc96dc9ded698bbfbfb975409a864a42',
			'pass' : 'x'
		}
	})
		.then(function(response){
		res.send(response);
		});
});

module.exports = router;