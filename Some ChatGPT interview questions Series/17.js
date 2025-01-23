// Problem: Find All Unique Triplets that Sum to Zero

// Write a function threeSum(arr) that finds all unique triplets in the array that sum up to zero. The function should return an array of arrays, where each subarray contains three numbers that add up to zero.


// Examples:
// Input: [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Explanation: The triplets [-1, -1, 2] and [-1, 0, 1] add up to zero. Each triplet is unique.

// Input: [0, 0, 0, 0]
// Output: [[0, 0, 0]]
// Explanation: Only one unique triplet, [0, 0, 0].

// Input: [-2, 0, 1, 1, 2]
// Output: [[-2, 0, 2], [-2, 1, 1]]
// Explanation: Two unique triplets add up to zero.

// Input: [3, -2, -1, 0, 1, 2, -1, -4, 2]
// Output: [[-4, 1, 3], [-2, -1, 3], [-2, 0, 2], [-1, -1, 2], [-1, 0, 1]]

function threeSum(arr){
    if(arr.length === 0) return;
    const sorted = arr.sort((a, b) => a - b); // Step 1: Sort the array
    const result = [];

    // Step 2: Iterate through the sorted array
    for (let i = 0; i < sorted.length; i++) {
        // Skip duplicate elements to avoid duplicate triplets
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;

        // Initialize two pointers
        let left = i + 1;
        let right = sorted.length - 1;

        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];

            if (sum === 0) {
                // Found a triplet
                result.push([sorted[i], sorted[left], sorted[right]]);

                // Skip duplicates for the left and right pointers
                while (left < right && sorted[left] === sorted[left + 1]) left++;
                while (left < right && sorted[right] === sorted[right - 1]) right--;

                // Move both pointers inward
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Move the left pointer to increase the sum
            } else {
                right--; // Move the right pointer to decrease the sum
            }
        }
    }
    return result;
    
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))



