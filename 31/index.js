// Write a function called simplePasswordValidator that takes a single parameter:

// password: A string representing the password to be validated.
// The function should validate the password based on the following criteria:

// The password must contain at least one lowercase letter, one uppercase letter, and one digit.
// The length of the password must be at least 8 characters.

// Input:
// password: A non-empty string representing the password to be validated.

// Output:
// true if the password meets all the criteria.
// false otherwise.

// Constraints:
// The input string password will contain only alphanumeric characters and punctuation marks.

const simplePasswordValidator = (str) =>{
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;

    for(char of str){
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
            hasUpperCase = true
        }
        else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
            hasLowerCase = true
        }
        else if(!isNaN(Number(char))){
            hasNumber= true
        }
    }
    if(!hasLowerCase || !hasUpperCase || !hasNumber || str.length < 8){
        return false;
    }
    return true
}

// charCodeAt() <= is to find ASCII value of a character

console.log(simplePasswordValidator("askskhdflasdf")) // output: false
console.log(simplePasswordValidator("asdfjjhgsff1")) // output: false
console.log(simplePasswordValidator("askskhdflasd1A")) // output: true
console.log(simplePasswordValidator("askskhdflas1Aa")) // output: true