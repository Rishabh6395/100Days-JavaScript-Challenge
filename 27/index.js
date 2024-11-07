// Write a fucntion called repeatString that takes two parameters:

// str: A string that needs to be repeated.
// num: An integer representing the number of times the string should be repeated.
// The function should repeat the input string str the specified number of times num and return the resulting string.

const repeatString = (str, num) =>{
    return num > 0 ? str.repeat(num) : str
}

console.log(repeatString('abc', 5)) // Output: "abcabcabcabcabc"

// Constraints:
// The input string str will contain only alphanumeric characters and punctation marks.
// The input number num will be a non-negative integer.
// The input string length should not exceed the length of str multiplied by num.