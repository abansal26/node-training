// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  var length = string.length;
  var output = {};
  for (var index = 0;index < length; index++) {
    var character = string.charAt(index);
    if ((character >= "a" && character <= "z") || (character >= 'A' && character <= 'Z')) {
      output[character] = (output[character] || 0) + 1;
    }
  }
  return output;
}
exports.calculateFrequency = calculateFrequency;