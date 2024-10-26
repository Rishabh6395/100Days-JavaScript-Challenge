
// Write a function to calculate the sum of squares of all elements in an array. For example, given the array[1,2,3], the function shouldreturn 14 because 1*1 + 2*2 + 3*3 = 1+4+9 =14.

const sumOfSquares = (arr) =>{
    // Method : 1
    // return arr.reduce((accum, currElem) => (accum = accum + (currElem*currElem)),0)

    // Method : 2
    let sum = 0
    for(let elem of arr){
        sum = sum + elem * elem
    }
    return sum
}

console.log((sumOfSquares([1,2,3]))) // Output: 14