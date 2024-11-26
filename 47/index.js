// Extract Numbers from a String

// Write a regular expression to extract all numbers from a given string.

const extractNumbers = (num) =>{
    let regex =  /\d+/g
    return num.match(regex)
}

console.log(extractNumbers("absc12432dsf213")) // Output: ["12432", "213"]
console.log(extractNumbers("no numbers here")) // Output: null
console.log(extractNumbers("1a2b3c4d")) // Output: ["1","2","3","4"]
console.log(extractNumbers("")) // Output: null