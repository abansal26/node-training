// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var p1, p2, length;

  length = array.length;
  p1 = p2 = 0;

  for (i = 0; i < length; i++) {
    if (array[i] > p1) {
      p2 = p1;
      p1 = array[i];
    } else if (array[i] > p2) {
      p2 = array[i];
    }
  }

  return p2;
}
