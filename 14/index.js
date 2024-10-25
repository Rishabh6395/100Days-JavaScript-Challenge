// Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise/

// Method :1 (Not efficent, not covering all the edge cases.)

// const isPowerOfTwo = (num) =>{
//     if(num === 0){
//         return false
//     }
//     else if( num % 2 === 0){
//         return true
//     }
//     return false
// }

// Method 2:
const isPowerOfTwo = (num) => {
    return num > 0 && (num & (num - 1)) === 0;
};


// Example usage:
console.log(isPowerOfTwo(8)) // Output: true
console.log(isPowerOfTwo(7)) // Output: false

// Notes:

// The input num will be a positive integer.
// Zero (0) and nugative integer are not considered powers of two.
// The function should return true if the given number is a power of 2, adn false otherwise.

// We can solve it useing bitwise operator too but its your chance to do it.