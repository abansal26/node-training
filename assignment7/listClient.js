var express = require('express');
var router = express.Router();
var requirePromise = require('request-promise');
var config = require('./config.js');

router.get('/:idClient/lists', function(req, res) {
  var idClient = req.params.idClient;
  var options = new config;
  options.url = options.url + '/' + idClient + '/lists.json';
  requirePromise.get(options)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
