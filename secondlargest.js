// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var largest, secondlargest, length;

  length = array.length;
  largest = secondlargest = 0;

  for (iteration = 0; iteration < length; iteration++) {
    if (array[iteration] > largest) {
      secondlargest = largest;
      largest = array[iteration];
    } else if (array[iteration] > secondlargest) {
      secondlargest = array[iteration];
    }
  }

  return secondlargest;
}
