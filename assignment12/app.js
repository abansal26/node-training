exports.secondLargest = function (array) {
  if (Array.isArray(array) === false)
    return new TypeError('input is not an array');
  var largest, secondLargest, length = array.length;
  if (array[0] >= array[1]) {
    largest = array[0];
    secondLargest = array[1];
  } else {
    largest = array[1];
    secondLargest = array[0];
  }
  for (var index = 2; index < length; index++) {
    if (array[index] > largest) {
      secondLargest = largest;
      largest = array[index];
    } else if (array[index] > secondLargest) {
      secondLargest = array[index];
    }
  }
  return secondLargest;
}

exports.calculateFrequency = function (string) {
  if (typeof string !== 'string')
    return new TypeError('input is not an string');
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

var flatten = function (unflatObject) {
  if (typeof unflatObject !== 'object' || unflatObject === null)
    return new TypeError('input is null or not an object');
  var output = {};
  for (var property in unflatObject) {
    if (typeof unflatObject[property] == "object") {
      var flattenObject = flatten(unflatObject[property]);
      for (var count in flattenObject) {
        output[property + "." + count] = flattenObject[count];
      }
    } else 
        output[property] = unflatObject[property];
  }
  return output;
}
exports.flatten = flatten;

var unflatten = function (flatObject) {
  if (typeof flatObject !== 'object' || flatObject === null)
    return new TypeError('input is null or not an object');
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
exports.unflatten = unflatten;