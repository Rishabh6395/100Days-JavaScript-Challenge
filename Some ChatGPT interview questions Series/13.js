// Write a function groupAnagrams that takes an array of strings and groups them into an array of arrays, where each sub-array contains words that are anagrams of each other.

// Input:
// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]


function groupAnagrams(words){
    const map = new Map();

    for (let word of words) {
        // Step 1: Normalize the word by sorting its characters
        const sorted = word.split('').sort().join('');

        // Step 2: Use the sorted string as a key in the map
        if (!map.has(sorted)) {
            map.set(sorted, []); // Create a new group if it doesn't exist
        }
        map.get(sorted).push(word); // Add the word to the correct group
    }

    // Step 3: Convert map values to an array and return
    return Array.from(map.values());
}

// Example Usage
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));