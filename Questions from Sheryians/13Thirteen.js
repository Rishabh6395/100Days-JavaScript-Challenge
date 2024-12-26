// In an array of numbers and strings, only and those members which are not strings.

var arr = ["rishabh", 1, 'ahdfksl', 23, "sfkrjh", 4];
sum = 0

arr.forEach(function(elem){
    if(typeof elem === 'number'){
        sum = sum + elem
    }
})
console.log(sum)