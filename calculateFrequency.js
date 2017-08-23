// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  var length = string.length;
  var output = {};

  for (var iteration = 0; iteration < length; iteration++) {
    var character = string.charAt(iteration);

    if (character >= "a" && character <= "z") {
      output[character] = (output[character] || 0) + 1;
    }
  }

  return output;
}
