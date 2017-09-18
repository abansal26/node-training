var express = require('express');
var router = express.Router();
var requirePromise = require('request-promise');
var config = require('./config.js');

router.get('/', function(req, res) {
  var options = new config;
  options.url = options.url + '.json';
  requirePromise.get(options)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;