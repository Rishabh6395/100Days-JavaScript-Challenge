// Mobile Number Validation

// Write a function that takes a string as input and returns true if the string represents a valid Indian mobile number, and false otherwise.

const validateIndianMobileNo = (regx) =>{
    return /^[6-9][\d]{9}$/.test(regx)
}

console.log(validateIndianMobileNo("6395646026")) // Output: true
console.log(validateIndianMobileNo("395646026")) // Output: false
console.log(validateIndianMobileNo("6395646")) // Output: false
console.log(validateIndianMobileNo("639564605426")) // Output: false