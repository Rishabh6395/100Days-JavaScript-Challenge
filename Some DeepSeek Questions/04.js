// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.

//  eg. nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// Explaination for the above code:
// The function twoSum takes two arguments: nums, which is the array of integers, and target, which is the target sum.
// It uses a nested loop to iterate through the array and find two elements that add up to the target sum.
// The function returns an array containing the indices of the two elements that add up to the target sum.
// If no such pair of elements is found, the function returns an empty array.