// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
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

