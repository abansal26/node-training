// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
  var l, i;
  l = string.length;
  var outp = {};
  for (i = 0; i < l; i++) {
    var r = string.charAt(i);
    if (r >= "a" && r <= "z") {
      outp[r] = (outp[r] || 0) + 1;
    }
  }
  return outp;
}
