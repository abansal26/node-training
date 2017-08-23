// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  var output = {};

  for (var iteration in unflatObject) {
    if (typeof unflatObject[iteration] == "object") {
      var flattenObject = flatten(unflatObject[iteration]);

      for (var count in flattenObject) {
        output[iteration + "." + count] = flattenObject[count];
      }
    } else output[iteration] = unflatObject[iteration];
  }

  return output;
}
