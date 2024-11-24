// Password Validation Coding Problem

// Create a function validatePassword that checks if a given password string meets the following criteria

const validatePassword = (password) =>{
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,}$/
    return regex.test(password)
}

console.log(validatePassword("Pass123!")) // output: true;
console.log(validatePassword("password")) // output: false;
console.log(validatePassword("12345678")) // output: false;
console.log(validatePassword("P@ssw0rd")) // output: true;