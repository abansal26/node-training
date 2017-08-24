// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  var output = {};
  for (var index in unflatObject) {
    if (typeof unflatObject[index] == "object") {
      var flattenObject = flatten(unflatObject[index]);
      for (var count in flattenObject) {
        output[index + "." + count] = flattenObject[count];
      }
    } else output[index] = unflatObject[index];
  }
  return output;
}
