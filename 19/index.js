// Write a function to check if a given string starts with a specific substring.

// input

// str: a string(eg. "Hello world")
// subStr: a substring to check if it starts the given string(eg. "Hello")
// output : True if the string starts with the specified substring , otherwise flase.

// Method: 1
// const startsWith = (str, substr)=>{
//     return str.toLowerCase().startsWith(substr.toLowerCase())
// }

// Method: 2
const startsWith =(str, substr)=>{
    return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase()
}


console.log(startsWith("Hello world", "hello")) // Output: true
console.log(startsWith("Hello world", "world")) // Output: false