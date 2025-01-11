// First Unique Character in a String" Problem

function unChar(str) {
    let freq = {}; // Frequency map to store character counts

    // Step 1: Count the frequency of each character
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 2: Find the first character with frequency 1
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]] === 1) {
            return i; // Return the index of the first unique character
        }
    }

    return -1; // If no unique character exists
}

// Test cases
console.log(unChar("leetcode"));      // Output: 0
console.log(unChar("loveleetcode")); // Output: 2
console.log(unChar("aabb"));         // Output: -1
