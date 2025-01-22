// Problem: Find the Longest Consecutive Sequence

// Write a function longestConsecutiveSequence(arr) that takes an unsorted array of integers and returns the length of the longest consecutive sequence of numbers in the array.

// Example:
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive sequence is [1, 2, 3, 4], and its length is 4.

function longestConsecutiveSequence(arr){
    if (arr.length === 0) return 0; // Handle edge case: empty array

    // Step 1: Sort the array
    const sortedArr = arr.sort((a, b) => a - b);

    // Step 2: Initialize variables to track the longest sequence
    let longestStreak = 1;
    let currentStreak = 1;

    // Step 3: Iterate through the sorted array
    for (let i = 1; i < sortedArr.length; i++) {
        // If the current number is the same as the previous, skip it
        if (sortedArr[i] === sortedArr[i - 1]) continue;

        // If numbers are consecutive, increase the current streak
        if (sortedArr[i] === sortedArr[i - 1] + 1) {
            currentStreak++;
        } else {
            // Otherwise, update the longest streak and reset the current streak
            longestStreak = Math.max(longestStreak, currentStreak);
            currentStreak = 1;
        }
    }

    // Step 4: Return the maximum streak length
    return Math.max(longestStreak, currentStreak);

}

//  TEST CASES: 

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // OUTPUT: 4
console.log(longestConsecutiveSequence([1, 2, 0, 1])); // OUTPUT: 3
console.log(longestConsecutiveSequence([])); // OUTPUT: 0
console.log(longestConsecutiveSequence([9, 1, 4, 7, 3, -2, -1, 0, 2])); // OUTPUT: 5
console.log(longestConsecutiveSequence([10, 5, 12, 3, 55, 30, 31, 32, 33, 34])); // OUTPUT: 5
