var fs = require("fs");

var fileRead = function(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, function(err, data) {
      if (err) {
        return reject(err);
      }
      console.log("reading "+ fileName +" completed");
      resolve(data);
    });
  });
};

var fileAppend = function(data , fileName) {
  return new Promise(function(resolve, reject) {
    fs.appendFile(fileName, data, function(err) {
      if (err) {
        return reject(err);
      }
      resolve(console.log("Appending data in "+ fileName +" completed"));
    });
  });
};

var fileWrite = function(data , fileName) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(fileName, data, function(err) {
      if (err) {
        return reject(err);
      }
      resolve(console.log("writing data in "+ fileName +" completed"));
    });
  });
};

fileRead("file1.txt")
  .then(data => fileAppend(data , "file2.txt"))
  .then(data => fileRead("file2.txt"))
  .then(data => fileWrite(data , "file3.txt"))
  .catch(function(e) {
  console.log(e); 
  });
