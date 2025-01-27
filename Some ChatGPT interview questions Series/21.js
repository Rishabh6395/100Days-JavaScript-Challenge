// Question: Write a function in JavaScript that takes a string as input and returns the string reversed.

function reverseStr(str){
    return str.split("").reverse().join("")
}

console.log(reverseStr("hello"))