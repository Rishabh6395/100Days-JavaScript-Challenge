// Write a function that takes a number as input and returns the sum of its digits.

const sumOfDigits = (num) =>{
    let arr = Array.from(String(num), Number)
    console.log(arr)
    return arr.reduce((accum, currElem)=> accum += currElem, 0)
}

// Example usage:
console.log(sumOfDigits(1234)) // Output:10
console.log(sumOfDigits(4321)) // Output:10
console.log(sumOfDigits(123456)) // Output:21

// Constraints:

// The input number will alwaus be a poitive integer.
// The input number can have multiple digits.
// The ouptput should be the sum of all the digits in the input numbre.

// Homework
// This function calculates the sum of digits without converting the number to a string.