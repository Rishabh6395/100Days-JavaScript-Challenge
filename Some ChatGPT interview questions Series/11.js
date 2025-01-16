// Write a function mergeSortedArrays that takes two sorted arrays of integers as input and returns a single sorted array that merges them while maintaining the sorted order. The function should not use any built-in sort functions.

// Input:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6, 8];

// Output:
[1, 2, 3, 4, 5, 6, 8]



function sortedArr(ar1, ar2){
    let mergArr = arr1.concat(arr2).sort()
    console.log("This is your sorted array: ",mergArr)
}

sortedArr([1, 3, 5], [2, 4, 6, 8])