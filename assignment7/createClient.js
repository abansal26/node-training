var express = require("express");
var router = express.Router();
var requirePromise = require("request-promise");

router.get("/", function(req, res) {
  var options = {
    url: "https://api.createsend.com/api/v3.1/clients.json",
    auth: {
      user: "fc96dc9ded698bbfbfb975409a864a42",
      pass: "x"
    },
    body: {
      CompanyName: "animesh",
      Country: "India",
      TimeZone: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi"
    },
    json: true
  };
  requirePromise.post(options).then(function(response) {
    res.send("ID of new Client is " + response);
  });
});

module.exports = router;
