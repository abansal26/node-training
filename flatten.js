// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
  var outp = {};
  var x = unflatObject;
  for (var a in x) {
    if (typeof x[a] == "object") {
      var fo = flatten(x[a]);
      for (var b in fo) {
        outp[a + "." + b] = fo[b];
      }
    } else outp[a] = x[a];
  }
  return outp;
}
