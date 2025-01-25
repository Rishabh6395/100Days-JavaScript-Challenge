// Write a function that flattens a nested array. The function should handle arrays of any depth.

// Input: [1, [2, [3, [4, [5]]]], 6]
// Output: [1, 2, 3, 4, 5, 6]

// Input: [[[1, 2], 3], [4, 5]]
// Output: [1, 2, 3, 4, 5]


// RECURSIVE SOLUTION

// function flattenArrayRecursive(arr) {
//     let result = [];
//     for (let element of arr) {
//         if (Array.isArray(element)) {
//             result = result.concat(flattenArrayRecursive(element));
//         } else {
//             result.push(element);
//         }
//     }
//     return result;
// }

function flattenArrayIterative(arr) {
    let stack = [...arr];
    let result = [];

    while (stack.length) {
        let element = stack.pop();
        if (Array.isArray(element)) {
            stack.push(...element); // Push back array elements onto the stack
        } else {
            result.push(element);
        }
    }

    return result.reverse(); // Reverse to maintain order
}

// Example Usage
console.log(flattenArrayIterative([1, [2, [3, [4, [5]]]], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flattenArrayIterative([[[1, 2], 3], [4, 5]]));       // [1, 2, 3, 4, 5]


// Example Usage
// console.log(flattenArrayRecursive([1, [2, [3, [4, [5]]]], 6])); // [1, 2, 3, 4, 5, 6]
// console.log(flattenArrayRecursive([[[1, 2], 3], [4, 5]]));       // [1, 2, 3, 4, 5]
