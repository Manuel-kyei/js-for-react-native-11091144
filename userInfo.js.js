// Task 3
function processArray(arr) {
  // Create a new array to store the results
  const newArr = [];

  // Loop through each element in the original array
  for (let num of arr) {
    // Check if the number is even
    if (num % 2 === 0) {
      // Square the even number
      newArr.push(num * num);
    } else {
      // Triple the odd number
      newArr.push(num * 3);
    }
  }

  // Return the new array with modified elements
  return newArr;
}
