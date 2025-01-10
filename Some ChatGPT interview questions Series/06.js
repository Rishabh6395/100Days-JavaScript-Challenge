// Longest Subarray with Sum K

function max(a, b) {
    if (a > b) return a;
    else return b;
}

function longestSubArray(arr, k) {
    let len = 0; // Initialize the max length to 0

    for (let i = 0; i < arr.length; i++) { // Loop up to arr.length (not arr.length + 1)
        for (let j = i; j < arr.length; j++) { // Same here, avoid arr.length + 1
            let sum = 0;

            // Calculate the sum of the subarray [i, j]
            for (let x = i; x <= j; x++) { // Use a different variable name to avoid shadowing
                sum += arr[x];
            }

            // Check if the sum equals the target and update the length
            if (sum === k) {
                len = max(len, j - i + 1); // Properly calculate the subarray length
            }
        }
    }

    console.log(len); // Output the final length for this test case
}

// Test cases
longestSubArray([1, 2, 3, 4, 5], 9); // Expected output: 3
longestSubArray([-1, 2, 3, -3, 4], 4); // Expected output: 2
