// Write a function findDuplicates(arr) that takes an array of numbers and returns an array of duplicate numbers (numbers that appear more than once). The output array should not contain duplicate values.


function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return [...duplicates];
}

// Test case
console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 3])); 
// Output: [2, 3]

console.log(findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
// Output: []

console.log(findDuplicates([1, 1, 1, 1, 1, 1]));
 // Output: [1]