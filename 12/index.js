// Write a function tahta takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

const removeDuplicates = (arr) =>{
    let newArr = [...new Set(arr)]
    return newArr;
}


// Example usage:
console.log(removeDuplicates([1,2,3,2,1,4])) // O/P: [1,2,3,4]
console.log(removeDuplicates([5,6,7,7,8,8,9])) // O/P: [5,6,7,8,9]
console.log(removeDuplicates([1,2,3,4])) // O/P: [1,2,3,4]
console.log(removeDuplicates([])) // O/P: []

// The new Set() method in JavaScript creates a new set object. A set object is a collection of unique values. It can store any type of value, whether primitive values or object references.

// Constraintes:

// The input array may contain both positive and negative integers.
// The input arrray many be empty.
// The elememts in the input array are not guaranteed to be stored.
// The output array should retain the orignal order of elements from the input array.