// Write a function called findMode that takes an array of numbers as input and return the mode of the array (the number that appears most frequesntly)

function findMode(arr){
    
    let count = {}
    let maxNum = 0
    let mode

    for(let element of arr){
        count[element]  = (count[element] || 0) + 1
        if(count[element] > maxNum){
            maxNum = count[element]
            mode = element
        }
    }
    console.log(count)
    return mode
}

console.log(findMode([1, 2, 2, 3, 1, 4, 2])) // op: 2

// Constraints:
// The input array will always contain at least one element.
// The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequecency)

