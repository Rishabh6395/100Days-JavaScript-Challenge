// Write a function firstUniqueCharacter that takes a string and returns the index of the first non-repeating character. If there’s no unique character, return -1.

// Input:
// const str = "leetcode";

// Output:
// 0

// Input:
// const str = "loveleetcode";

// Output:
// 2

// Input:
// const str = "aabb";

// Output:
// -1



function firstUniqueCharacter(str){
    const ans = str.split("").reduce((accum, char) => {
        accum[char] = (accum[char] || 0) + 1;
        return accum;
    }, {})
    console.log(ans)

    const index = str.split("").findIndex(char => ans[char] === 1)
    return index
}

console.log(firstUniqueCharacter("leetcode"))
console.log(firstUniqueCharacter("loveleetcode"))
console.log(firstUniqueCharacter("aabb"))