// Write a funcion that accepts an array and returns the sum of its elements.

// function sumArr(arr){
//     var sum = 0;
//     arr.forEach(function(v){
//         sum = sum + v;
//     })
//     return sum;
// }

// console.log(sumArr([1,3,4,5,5,7,7,8,4]))

// Checks a functino that checks if a strig starts with a specific character.

function checker(str, char){
    return str.toLowerCase().startsWith(char.toLowerCase())
}
console.log(checker("Harsh", 'h'))