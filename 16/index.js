// Find the minimum value in an array.

// Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

// Constraints:
// The input array may contain both positive and negative integers.
// The input array may be empty.
// The input array may contain duplicate values.

// Method: 1
// const findMin = (arr) =>{
//     if(arr.length === 0) return "array is empty"
//     const val = arr.sort((a,b) => a-b)
//     return val[0]
// }
// Method :2
const findMin = (arr) =>{
    if(arr.length === 0) return "array is empty"
    return Math.min(...arr)
}


console.log(findMin([5, 10, 2, 8])) // output: 2
console.log(findMin([5, -3, 0, 12, -7])) // output: -7
console.log(findMin([])) // output: undefined (or any suitable message for empty array)

