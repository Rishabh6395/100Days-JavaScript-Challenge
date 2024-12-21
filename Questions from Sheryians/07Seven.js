// Write a JavaScript function that checks whether a passed string is palindrome or not?

function stringPalChecker(str){
    let temp = str.split("").reverse().join("")
    // if(str === temp) console.log("It is a palindrome")
    // else{
    //     console.log("No it is not")
    // }
    // return str

    return temp === str ? console.log("It is a palindrome") : console.log("No it is not")
}

console.log(stringPalChecker("lolo"))
console.log(stringPalChecker("lol"))