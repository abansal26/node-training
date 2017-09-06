var express = require("express");
var router = express.Router();
var requirePromise = require("request-promise");

router.get("/:idClient/lists", function(req, res) {
  var idClient = req.params.idClient;
  var url =
    "https://api.createsend.com/api/v3.1/clients/" + idClient + "/lists.json";
  requirePromise
    .get(url, {
      auth: {
        user: "fc96dc9ded698bbfbfb975409a864a42",
        pass: "x"
      }
    })
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      console.log("error");
    });
});

module.exports = router;
