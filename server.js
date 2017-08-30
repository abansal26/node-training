var http = require("http");
var secondLargest = require("./programs/secondLargest").secondLargest;
var calculateFrequency = require("./programs/calculateFrequency")
  .calculateFrequency;
var flatten = require("./programs/flatten").flatten;
var unflatten = require("./programs/unflatten").unflatten;
const util = require("util");

var input_array = [
  21,
  87,
  91,
  31,
  97,
  59,
  8,
  83,
  27,
  23,
  76,
  72,
  31,
  91,
  65,
  77,
  84,
  27,
  56,
  59
];
var input_string = "shali is running fast";
var unflatObject = {
  flatJSON: false,
  i: { am: { not: { so: { flat: true, unflat: false } }, a: "tree" } },
  dates: [{ day: 1 }, { day: 8947 }]
};
var flatObject = {
  flatJSON: false,
  "i.am.not.so.flat": true,
  "i.am.not.so.unflat": false,
  "i.am.a": "tree",
  "dates.0.day": 1,
  "dates.1.day": 8947
};

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "The second largest number in " +
        input_array +
        " is : " +
        secondLargest(input_array) +
        "</br>"
    );
    res.write(
      "The frequency of characters in " +
        util.inspect(input_string) +
        " is : " +
        util.inspect(calculateFrequency(input_string)) +
        "</br>"
    );
    res.write(
      "The flattening of " +
        util.inspect(unflatObject) +
        " is : " +
        util.inspect(flatten(unflatObject)) +
        "</br>"
    );
    res.write(
      "The unflattening of " +
        util.inspect(flatObject) +
        " is : " +
        util.inspect(unflatten(flatObject)) +
        "</br>"
    );
    res.end();
  })
  .listen(8080);
