// write a function findMax that takes an array of number as input and returns the maximum number in the array.


// Method 1:
// const findMax = (arr)=>{
//     arr.sort((a,b) => b-a)
//     return arr[0]
// }

// Method 2:
const findMax = (arr) =>{
    return Math.max(...arr)
}
// console.log(findMax())

// Example usage:
console.log(findMax([1,5,3,6,9,8])) // output: 9
console.log(findMax([-10,-5,-6,-2])) // output: -2
console.log(findMax([5])) // output: 5