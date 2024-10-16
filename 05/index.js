// Programming question: Sort an array

// Write a function to sort an array of n numbers in ascending order.

function sort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
        if (arr[i] > arr[j]) {
            let ref = arr[i];
            arr[i] = arr[j];
            arr[j] = ref;
        }
    }
  }
  return arr;
}

const sortAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};

// Example usage:
// console.log(sortAscending([5,3,1,8])) // output: [1,3,5,8]
console.log(sortAscending([5, 3, 10, 8])); // output: [3,5,8,10]

// todo Requrirements:
// The function should take an array of number as input.
// It should return a new array with the numbers sorted in ascending order.
// The orignal array should remain unchanged.
//  You are not allowed to use the build-in sort() method.

// Note.
