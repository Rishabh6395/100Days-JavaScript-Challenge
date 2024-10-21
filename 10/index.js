// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e, contain the same elements in the same order), and false otherwise.

const arraysAreEqual = (arr1 , arr2) =>{
    if(arr1.length != arr2.length){
        return false
    }
    return arr1.every((currValue, Index) => currValue === arr2[Index])
}



//  Example usage:
console.log(arraysAreEqual([1,2,3], [1,2,3])) // output : ture
console.log(arraysAreEqual([1,2,3], [1,2,4])) // output : flase
console.log(arraysAreEqual([], [])) // output : true

// Note:

// The function ashould return false if the arrays have different length.
// The fucntion shold compare each element of arr1 with the corrensponding element in arr2
// The functin should return true only if all elements in arr1 are equal to their corresponding elements in arr2.