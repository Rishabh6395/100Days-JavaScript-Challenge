// "Find the Missing Number" Problem

function findMissingNum(arr){
    
    let len = arr.length
    let sum = (len * (len +1)) /2
    let lolSum = arr.reduce((accum, currElem) => accum + currElem, 0)

    let finalSum =  sum - lolSum 
    console.log(finalSum)

}

findMissingNum([3, 0, 1]) // Output: 2
findMissingNum([0, 1]) // Output: 2
findMissingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]) // Output: 8