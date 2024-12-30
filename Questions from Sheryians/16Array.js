// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first "n" elements of the array.

function retrieve(arr, n= 1){
    if(n > arr.length) return 
    for(let i = 0; i < n; i++){
        console.log(arr[i])
    }
}

retrieve([1, 2, 3, 4, 5], 2)