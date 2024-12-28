// Write a javascript function to clone an array.

function cloneArr(arr){
    return [...arr]
}

var newarr = cloneArr([1, 2, 3, 4])

console.log(newarr)