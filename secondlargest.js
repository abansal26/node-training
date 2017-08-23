// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var largest =0, secondLargest = 0, length;

  length = array.length;

  for (iteration = 0; iteration < length; iteration++) {
    if (array[iteration] > largest) {
      secondLargest = largest;
      largest = array[iteration];
    } else if (array[iteration] > secondLargest) {
      secondLargest = array[iteration];
    }
  }

  return secondLargest;
}
