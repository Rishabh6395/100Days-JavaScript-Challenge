// Write a function longestSubstringWithoutRepeating that takes a string as input and returns the length of the longest substring without repeating characters.

// SLIDING WINDOW - First match, if "start" and "end" is equal or not, if its equal then move "start" (+1) and if not then move "end" (+1)
// The initial values are "start" will point 0 index of the array and end points start+1

function longestSubstringWithoutRepeating(str) {
    let convertedArr = str.split("");

    let maxLength = 0; // To store the length of the longest substring
    let longestSubstring = ""; // To store the longest substring itself
    let trackChar = []; // To temporarily track characters in the current substring

    for (let start = 0; start < convertedArr.length; start++) {
        trackChar = []; // Reset trackChar for each new starting point

        for (let end = start; end < convertedArr.length; end++) {
            if (trackChar.includes(convertedArr[end])) {
                // If character is repeated, break out of the loop
                break;
            } else {
                // Add character to trackChar
                trackChar.push(convertedArr[end]);

                // Update maxLength and longestSubstring if needed
                if (trackChar.length > maxLength) {
                    maxLength = trackChar.length;
                    longestSubstring = trackChar.join(""); // Convert array to string
                }
            }
        }
    }

    return { maxLength, longestSubstring };
}




console.log(longestSubstringWithoutRepeating("abcabcbb")); // 3 ("abc")
console.log(longestSubstringWithoutRepeating("bbbbb"));    // 1 ("b")
console.log(longestSubstringWithoutRepeating("pwwkew"));   // 3 ("wke")
console.log(longestSubstringWithoutRepeating(""));         // 0 (empty string)
console.log(longestSubstringWithoutRepeating("abcdef"));   // 6 ("abcdef")
