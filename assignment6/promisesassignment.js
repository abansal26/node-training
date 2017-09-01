var fs = require("fs");

var firstMethod = function() {
  return new Promise(function(resolve, reject) {
    fs.readFile("file1.txt", function(err, data) {
      if (err) {
        return reject(err);
      }
      console.log("first method completed");
      resolve(data);
    });
  });
};

var secondMethod = function(data) {
  return new Promise(function(resolve, reject) {
    fs.appendFile("file2.txt", data, function(err) {
      if (err) {
        return reject(err);
      }
      resolve(console.log("second method completed"));
    });
  });
};

var thirdMethod = function() {
  return new Promise(function(resolve, reject) {
    fs.readFile("file2.txt", function(err, data) {
      if (err) {
        return reject(err);
      }
      console.log("third method completed");
      resolve(data);
    });
  });
};

var fourthMethod = function(data) {
  return new Promise(function(resolve, reject) {
    fs.appendFile("file3.txt", data, function(err) {
      if (err) {
        return reject(err);
      }
      resolve(console.log("fourth method completed"));
    });
  });
};

firstMethod()
  .then(secondMethod)
  .then(thirdMethod)
  .then(fourthMethod)
  .catch(function(e) {
  console.log(e); 
  });
