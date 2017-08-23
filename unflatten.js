// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  var result = {};

  for (var key in flatObject) {
    var substring = key.split(".");
    var temp = result;

    for (var iteration = 0; iteration < substring.length - 1; iteration++) {
      if (!(substring[iteration] in temp)) {
        if (isFinite(substring[iteration + 1])) {
          temp[substring[iteration]] = [];
        } else {
          temp[substring[iteration]] = {};
        }
      }

      temp = temp[substring[iteration]];
    }

    temp[substring[substring.length - 1]] = flatObject[key];
  }

  return result;
}
