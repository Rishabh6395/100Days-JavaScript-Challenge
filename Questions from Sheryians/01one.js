// Reverse a string
let str = "my name is Rishabh Bhatt"

let savedStr = str.split(" ").map(function(word){
    return word.split("").reverse().join("")
})
console.log(savedStr.join(" "))