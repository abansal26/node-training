// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  var length;

  length = string.length;
  var output = {};

  for (var i = 0; i < length; i++) {
    var r = string.charAt(i);

    if (r >= "a" && r <= "z") {
      output[r] = (output[r] || 0) + 1;
    }
  }

  return output;
}
