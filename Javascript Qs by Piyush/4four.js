variable = 10

(()=>{
    foo = 100;
    console.log(variable) 
    var foo = 100
    variable = 20
    console.log(variable)
})() //iife

console.log(foo)
console.log(variable)
var variable = 30