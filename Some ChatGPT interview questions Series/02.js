// Write a function called isAnagram that checks if two given strings are anagram of each other.. An anagram is when two strings have the same characters, but in a different order..



// first sort any of them str1 or str2 and store in a temp variable. And then sort str1 and store in temp2 variable and same for str2 as well. and if they match temp then return true.. or else false.

// This is my unoptimized approach .. lol :

// function isAnagram(str1, str2) {
//     let storeStr = str1.split("").sort()
//     let newStr1 = str1.split("").sort()
//     let newStr2 = str2.split("").sort()

//     let finalStr1 = newStr1.join("")
//     let finalStr2 = newStr2.join("")
//     let finalStoreStr = storeStr.join("")
    
//     // console.log(finalStr1, finalStr2)
//     // console.log("This is storestr: ", storeStr)
//     // compare str1 and str2 from storeStr 
//     if(finalStr1 === finalStoreStr && finalStr2 === finalStoreStr) return true
//     else return false
// }


// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));  // false
// console.log(isAnagram("rat", "tar"));      // true

// MORE POLISHED VERSION OF THIS CODE:

// function isAnagram(str1, str2) {
//     // Remove whitespace, convert to lowercase, split, sort, and join
//     let sortedStr1 = str1.toLowerCase().split("").sort().join("");
//     let sortedStr2 = str2.toLowerCase().split("").sort().join("");

//     // Compare the sorted strings
//     return sortedStr1 === sortedStr2;
// }

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));  // false
// console.log(isAnagram("rat", "tar"));      // true
// console.log(isAnagram("Listen", "Silent")); // true (case-insensitivity test)


// AND HERE IS MOST OPTIMIZED APPROACH OF THIS FOLLWOING QUESTION:

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false; // Early exit for different lengths

    const charCount = {};

    for (let char of str1.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2.toLowerCase()) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));  // false
console.log(isAnagram("rat", "tar"));      // true
console.log(isAnagram("Listen", "Silent")); // true (case-insensitivity test)
