// Write a function that accepts a string and return its reverse.

function abcd(value){
    return value.split("").reverse().join("")
}

// console.log(abcd("123456789"))

// Create a function to find the largest number in an array.

function fun(arr){
    var max = 0
    for(var i =1; i<arr.length; i++){
        if(arr[i]>arr[max]){
            max = i;
        }
    }
    return arr[max]
}

console.log(fun([1,2,38,44,15,6,7]))


