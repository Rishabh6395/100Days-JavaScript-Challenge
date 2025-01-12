// "Move Zeroes to the End" Problem

function moveZero(arr){
    
    let nonZeroArr = []
    let zeroCount = 0

    arr.forEach((e) => {
        if(e===0){
            zeroCount++;
        } else{
            nonZeroArr.push(e)
        }
    })

    while(zeroCount > 0){
        nonZeroArr.push(0)
        zeroCount--;
    }

    for(let i = 0; i< arr.length; i++){
        arr[i] = nonZeroArr[i]
    }
    console.log(arr)
}

moveZero([0, 1, 0, 3, 12]) // [1, 3, 12, 0, 0]
moveZero([0, 0, 1]) // [1, 0, 0]
moveZero([4, 5, 0, 0, 6]) // [4, 5, 6, 0, 0]