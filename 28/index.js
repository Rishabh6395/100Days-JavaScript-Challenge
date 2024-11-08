// Write a function called truncateString that takes two parameters:

// str: a string that needs to be truncated
// maxLength: an integer representing the maximum length of the string allowd.
// the function should truncate the input string str if its length exveeds the specified maxLength. If truncation occurs, the function should be add '...' to the end of the trunctaed string.

const truncateString = (str, count) =>{
    // if(count <= 0){
    //     return str
    // }
    // else if(str.length > count){
    //     return str.slice(0, count).concat(' ...')
    // }

    return count <= 0 ? str : str.slice(0, count).concat(' ...')
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
// Output: "A-tisket ..."

