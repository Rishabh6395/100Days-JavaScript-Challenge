// Challenge: Factorial Finder

//  Write a function that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

// Here are some examples of factorial calculations:

// factorial(0) => 1
// factorial(1) => 1
// factorial(2) => 2
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120
// Your function should work for any non-negative integer input.


// Method 1:

// const factorial = (num)=>{
//     if(num === 0)
//         return 1;

//     let result  =1
//     for (let index = 1; index <= num; index++) {
//         result *= index
//     }
//     return result
// }

// Method 2: with the help of recursion
const factorial = (num)=>{
    if(num===0){ // Base condition
        return 1;
    }
    return num * factorial(num-1) // Recursive call
}



// Example usage: 
console.log(factorial(5)) // output: 120
console.log(factorial(0)) // output: 1
console.log(factorial(6)) // output: 720

// Later i will show using recursive function
