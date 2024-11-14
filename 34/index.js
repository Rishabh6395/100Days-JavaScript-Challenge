// Remove Dupliates From An Array.

// Write a function removeDuplicates that takes an array of elements as input and returs a new array with duplicate elements removed.

// Constraints:
// The input array may contain elements of any data type.
// The function should return a new array with duplicate elements removed, while preserving the order of elements from the original array.
// You should use the provided removeDuplicates function signature without any additional paramenters.

const removeDuplicates = (arr) =>{
    return [... new Set(arr)]
}

// Inside the function, the spread operator (...) is used to convert the Set object returned by new Set(arr) into an array. The Set object is created from the input array arr, which automatically removes any duplicate elements.

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6])) // Output: [1, 2, 3, 4, 5, 6]
console.log(removeDuplicates(["a", "b", "c", "b", "a"])) // Output: ["a", "b", "c"]