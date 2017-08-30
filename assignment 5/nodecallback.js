var fs = require("fs");

fs.readFile("file1.txt", function(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Reading file 1 complete");
  writefile2(data);
});

var writefile2 = function(data) {
  fs.appendFile("file2.txt", data, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("appending in file 2 complete");
    readFile2();
  });
};

var readFile2 = function() {
  fs.readFile("file2.txt", function(err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Reading file 2 complete");
    writefile3(data);
  });
};

var writefile3 = function(data) {
  fs.writeFile("file3.txt", data, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("writing in file 3 complete");
  });
};
