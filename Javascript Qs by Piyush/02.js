// JavaScript function hoisting and variable declarations. 

myFun()

var myFun = function(){
    console.log("first")
}

myFun()

function myFun(){
    console.log("second")
}

myFun()