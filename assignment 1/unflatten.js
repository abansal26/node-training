// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  var result = {};
  for (var key in flatObject) {
    var substring = key.split(".");
    var temp = result;
    for (var index = 0; index < substring.length - 1; index++) {
      if (!(substring[index] in temp)) {
        if (isFinite(substring[index + 1])) {
          temp[substring[index]] = [];
        } else {
          temp[substring[index]] = {};
        }
      }
      temp = temp[substring[index]];
    }
    temp[substring[substring.length - 1]] = flatObject[key];
  }
  return result;
}
