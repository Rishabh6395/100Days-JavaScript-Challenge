// Write a function findMissingNumber that takes an array of n unique integers in the range of 1 to n+1 (inclusive) and returns the missing number.

function findMissingNumber(arr) {
    
    let accutualSum = arr.length + 1
    let lolSum = (accutualSum * (accutualSum + 1)) / 2

    const sum = arr.reduce((accum, currElem) => accum + currElem, 0)
    let finalSum = lolSum - sum
    return finalSum;
}


console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8])); // 5
console.log(findMissingNumber([2, 3, 1, 5]));          // 4
console.log(findMissingNumber([1]));                  // 2
console.log(findMissingNumber([3, 4, 5, 6, 8, 7, 2])); // 1
