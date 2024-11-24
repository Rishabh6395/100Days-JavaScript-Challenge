// Introduction to Regular Expressions (mail Address Validation)

const validateEmail = (email) => {
    return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email)
}

console.log(validateEmail("john.doe@example.com")) // true
console.log(validateEmail("invalid..doe@example.com")) // false
console.log(validateEmail("missingdot@example.com")) // false
console.log(validateEmail("nodomain@example.")) // false