var express = require('express');
var router = express.Router();
var requirePromise = require('request-promise');
var config = require('./config.js');

router.delete('/:idClient', function(req, res) {
  var idClient = req.params.idClient;
  var options = new config;
  options.url = options.url + '/' + idClient + '.json';
  requirePromise.delete(options)
    .then(function(response) {
      res.send('Client with client ID : ' + idClient + ' deleted');
      console.log(options);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
