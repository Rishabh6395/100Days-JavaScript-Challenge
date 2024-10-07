// Programming Question: Hash Tag Generator

// You are required to implement a function generateHash that generates a hash tag from a given input string.

// The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spacces.

// If the length of the input string is greater than 280 charcters or if the input string is empty or contains only whitespace, the function should return false.

// Otherwise, the function should return the generated hash tag prefixed with #.

const generateHash = (str) =>{
    if(str.length > 280 || str.trim().length === 0){
        return false
    }
    str = str.split(" ")
    str = str.map((currElem) =>
        // currElem.replace(currElem[0], currElem[0].toUpperCase())
        currElem.charAt(0).toUpperCase() + currElem.slice(1)
)
    str = `#${str.join("")}`
    console.log(str)
    return str
}


console.log(
    generateHash("my name is rishabh bhatt")
    // o/p = "#MyNameIsRishabhBhatt"
)