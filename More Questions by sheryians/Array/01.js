// Combine two arrays [1, 2] and [3, 4]  using .concat()
// var arr = [1,2,3,4,5,6]
// var arr2 = [7,8,9]
// console.log(arr.concat(arr2))

// Sort an array of numbers
var arr = [100,27,35,63]
// Bubble Sort
for(var j =0; j<arr.length -1; j++){
    for(var i =0; i<arr.length- j-1; i++){
        if(arr[i] > arr[i+1]){
            var temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }    
}
console.log(arr)



