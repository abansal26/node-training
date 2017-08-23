// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
  var result = {},
    i;
  for (var p in flatObject) {
    var s = p.split(".");
    var t = result;
    for (i = 0; i < s.length - 1; i++) {
      if (!(s[i] in t)) {
        if (isFinite(s[i + 1])) {
          t[s[i]] = [];
        } else {
          t[s[i]] = {};
        }
      }
      t = t[s[i]];
    }
    t[s[s.length - 1]] = flatObject[p];
  }
  return result;
}

