// Write a function to find the nth Fibonacci number.

// todo Fibonacci number is calculated using the following formula.
// todo syntax: F(n) = F(n-1) + F(n-2), Where, F(1) = F(2) = 1.

const fibonacci = (num) =>{
    if(num <= 1){
        return num
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2)
    }
}

console.log(fibonacci(0)) // Op: 0
console.log(fibonacci(1)) // Op: 1
console.log(fibonacci(2)) // Op: 1
console.log(fibonacci(3)) // Op: 2
console.log(fibonacci(4)) // Op: 3
console.log(fibonacci(5)) // Op: 5