// Write a javascript function to count the occurrences of each character in a given array and store the counts in an object. The keys of the object should be represent the elements of the array, and the values should represent the number of times each element appears in the array.

// Here's what the function should do:

// Accept an array of numbers as input.
// Create an empty object called counts to store the counts of each element.
// Iterate through each element in the input array.
// For each number, increment the count in the counts object.
// If the count for a number does not exist yet, initialize it to 1.
// Return the counts object containing the counts of each element.

// Input
const numbers = [1, 2, 2, 3, 1, 4, 2];
let counts = {}

for(let elements of numbers){
    counts[elements] = (counts[elements] || 0) +1
}
console.log(counts)

// Output
// { '1': 2, '2': 3, '3': 1, '4': 1 }

