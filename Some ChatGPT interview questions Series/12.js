// Write a function rotateArray that takes an array of integers and a number k, and rotates the array to the right by k steps. The rotation should be done in-place without using extra space for another array.



// Output:
// [4, 5, 1, 2, 3]


function rotateArray(arr, k){
    // step1: pop last k element
    const popped = arr.splice(-k).concat(arr);
    console.log(popped)
}

rotateArray([1, 2, 3, 4, 5], 3)


// // MORE REFINED VERSION OF THIS CODE:
// function rotateArray(arr, k) {
//     // Handle cases where k is greater than the array length
//     k = k % arr.length;

//     // Splice the last k elements and concatenate them at the start
//     const rotated = arr.splice(-k).concat(arr);

//     // Modify the original array
//     arr.length = 0; // Clear the array
//     Array.prototype.push.apply(arr, rotated); // Add rotated elements to the original array

//     return arr; // Return the rotated array
// }

// // Test
// console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Output: [3, 4, 5, 1, 2]
