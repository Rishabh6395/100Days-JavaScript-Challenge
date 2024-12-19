// Write JavaScript function that reverse a string

function reversed(num){
    return Number(num.toString().split("").reverse().join(""))
}

console.log(reversed(12))
