// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  var output = {};
  for (var property in unflatObject) {
    if (typeof unflatObject[property] == "object") {
      var flattenObject = flatten(unflatObject[property]);
      for (var count in flattenObject) {
        output[property + "." + count] = flattenObject[count];
      }
    } else 
        output[property] = unflatObject[property];
  }
  return output;
}
exports.flatten = flatten;