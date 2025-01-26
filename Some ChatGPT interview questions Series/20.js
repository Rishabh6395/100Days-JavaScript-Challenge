// Write a function that generates all permutations of a given string. The function should return an array of all unique permutations in lexicographical order.

// Input: "abc"
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]

// Input: "aab"
// Output: ["aab", "aba", "baa"]

function permuteUnique(str) {
    const results = [];
    const chars = str.split('').sort(); // Sort the string to handle duplicates easily
    const used = Array(chars.length).fill(false); // Keep track of used characters

    function backtrack(path) {
        if (path.length === str.length) {
            results.push(path.join(''));
            return;
        }

        for (let i = 0; i < chars.length; i++) {
            // Skip duplicate characters
            if (used[i]) continue;
            if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;

            // Include the current character
            used[i] = true;
            path.push(chars[i]);

            backtrack(path);

            // Backtrack
            path.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return results;
}

// Example Usage
console.log(permuteUnique("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]
console.log(permuteUnique("aab")); // ["aab", "aba", "baa"]
