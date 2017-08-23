// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  var output = {};

  for (var i in unflatObject) {
    if (typeof unflatObject[i] == "object") {
      var fo = flatten(unflatObject[i]);

      for (var j in fo) {
        output[i + "." + j] = fo[j];
      }
    } else output[i] = unflatObject[i];
  }

  return output;
}
