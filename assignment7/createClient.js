var express = require('express');
var router = express.Router();
var requirePromise = require('request-promise');
var config = require('./config.js');

router.post('/', function(req, res) {
  var options = new config;
  options.url = options.url + '.json'; 
  options.body = {
      CompanyName: 'rishabh',
      Country: 'India',
      TimeZone: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi'
    };
  options.json = true;
  requirePromise.post(options)
  .then(function(response) {
    res.send('ID of new Client is ' + response);
  })
  .catch(function(err) {
    res.send(err);
  })
});

module.exports = router;
