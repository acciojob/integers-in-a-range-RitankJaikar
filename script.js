// write your code here
function range(start, end) {
  // Create an empty array to store the result
  let result = [];
  
  // Use a for loop to iterate from start to end (inclusive)
  for (let i = start; i <= end; i++) {
    result.push(i); // Add each integer to the result array
  }
  
  // Return the resulting array
  return result;
}

// do not change the code below.
let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(start, end));
