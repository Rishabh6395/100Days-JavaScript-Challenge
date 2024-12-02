var variable = 10;

(()=>{
    console.log(variable)

    variable = 20

    console.log(variable)
})() // iife

console.log(variable)
var variable = 30


