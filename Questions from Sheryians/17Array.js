// Write a javascript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

function reterive(arr, n = 1){
    if(n <= arr.length){
        for(let i = 0; i< n; i++){
            console.log(arr[arr.length - 1 -i])
        }
    }
    else{
        console.log(n + "This element not found!!")
    }

}

reterive([1, 2, 3, 4, 5], 2)