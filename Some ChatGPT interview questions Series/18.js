// Find All Quadruplets That Sum to a Target

// Write a function fourSum that takes an array of integers arr and an integer target. The function should return all unique quadruplets [a, b, c, d] such that:

// 𝑎 + 𝑏 + 𝑐 + 𝑑 = target
// a+b+c+d=target

// fourSum([1, 0, -1, 0, -2, 2], 0);
// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

// fourSum([2, 2, 2, 2, 2], 8);
// Output: [[2, 2, 2, 2]]

function fourSum(arr, target) {
    // Edge case: If the array has fewer than 4 elements
    if (arr.length < 4) return [];

    // Step 1: Sort the array
    let sorted = arr.sort((a, b) => a - b);
    const result = [];

    // Step 2: Iterate over the array with two outer loops
    for (let i = 0; i < sorted.length - 3; i++) {
        // Skip duplicates for the first element
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;

        for (let j = i + 1; j < sorted.length - 2; j++) {
            // Skip duplicates for the second element
            if (j > i + 1 && sorted[j] === sorted[j - 1]) continue;

            // Step 3: Use two pointers for the remaining two elements
            let left = j + 1;
            let right = sorted.length - 1;

            while (left < right) {
                const sum = sorted[i] + sorted[j] + sorted[left] + sorted[right];

                if (sum === target) {
                    // Found a valid quadruplet
                    result.push([sorted[i], sorted[j], sorted[left], sorted[right]]);

                    // Skip duplicates for left and right pointers
                    while (left < right && sorted[left] === sorted[left + 1]) left++;
                    while (left < right && sorted[right] === sorted[right - 1]) right--;

                    // Move both pointers inward
                    left++;
                    right--;
                } else if (sum < target) {
                    left++; // Increase the sum by moving the left pointer
                } else {
                    right--; // Decrease the sum by moving the right pointer
                }
            }
        }
    }
    return result;
}

// Test cases
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); 
// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

console.log(fourSum([2, 2, 2, 2, 2], 8)); 
// Output: [[2, 2, 2, 2]]

console.log(fourSum([1, -1, 0, 0, -2, 2, 3], 3)); 
// Output: [[-2, 0, 2, 3], [-1, 0, 1, 3]]

console.log(fourSum([], 0)); 
// Output: []

console.log(fourSum([1, 2, 3, 4, 5], 50)); 
// Output: []
