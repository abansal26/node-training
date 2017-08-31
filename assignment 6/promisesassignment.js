var fs = require("fs");

var firstMethod = function() {
  var promise = new Promise(function(resolve, reject) {
    fs.readFile("file1.txt", function(err, data) {
      if (err) {
        reject(err);
      }
      console.log("first method completed");
      resolve(data);
    });
  });
  return promise;
};

var secondMethod = function(data) {
  var promise = new Promise(function(resolve, reject) {
    fs.appendFile("file2.txt", data, function(err) {
      if (err) {
        reject(err);
      }
      resolve(console.log("second method completed"));
    });
  });
  return promise;
};

var thirdMethod = function() {
  var promise = new Promise(function(resolve, reject) {
    fs.readFile("file2.txt", function(err, data) {
      if (err) {
        reject(err);
      }
      console.log("third method completed");
      resolve(data);
    });
  });
  return promise;
};

var fourthMethod = function(data) {
  var promise = new Promise(function(resolve, reject) {
    fs.appendFile("file3.txt", data, function(err) {
      if (err) {
        reject(err);
      }
      resolve(console.log("fourth method completed"));
    });
  });
  return promise;
};

firstMethod().then(secondMethod).then(thirdMethod).then(fourthMethod);
