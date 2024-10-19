// Challenge: Calculate the average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers. 

// Your function should:

// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
//  Divide the sum be the total number of elements in the array to find the average.
// Return the calculated average.

const calculatedAverage = (arr)=>{
    let total = arr.reduce((accum, currElem) => accum + currElem, 0)
    let avg = total/arr.length
    return avg;
}



// Example usage:
console.log(calculatedAverage([5,10,2,8])) // Output : 6.25

// Note.

// Ensure the function handles arrays of any length
// The average should be returned as a floating-point number.
