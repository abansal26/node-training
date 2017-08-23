// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  var result = {};

  for (var key in flatObject) {
    var substring = key.split(".");
    var temp = result;

    for (var i = 0; i < substring.length - 1; i++) {
      if (!(substring[i] in temp)) {
        if (isFinite(substring[i + 1])) {
          temp[substring[i]] = [];
        } else {
          temp[substring[i]] = {};
        }
      }

      temp = temp[substring[i]];
    }

    temp[substring[substring.length - 1]] = flatObject[key];
  }

  return result;
}

