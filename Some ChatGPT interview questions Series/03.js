// Write a function findFirstUnique that takes a string as input and returns the first non-repeating character. If all characters repeat, return null.

function findFirstUnique(str) {
    const charCount = {};

    // First Pass: Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second Pass: Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no unique character is found, return null
    return null;
}


console.log(findFirstUnique("swiss")); // "w"
console.log(findFirstUnique("programming")); // "p"
console.log(findFirstUnique("aabbcc")); // null
console.log(findFirstUnique("abcabcde")); // "d"
