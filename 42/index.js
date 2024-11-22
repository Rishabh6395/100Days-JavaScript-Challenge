// Validate a Credit Card Number (Luhn Algorithm)


const validateCreditCard = (str) => {
    // remove empty spaces
    str = str.replace(/\D/g, "")

    // step:1 reverse str
    let revNum = ""
    for(let i= str.length - 1; i >= 0; i--){
        revNum = revNum + str[i]
    }
    // step: 2 Double Every Second Digit
    let doubleNum = revNum.split("").map((currDigit, index)=>{
        if(index % 2 !== 0){
            currDigit = currDigit *2

            if(currDigit > 9){
                currDigit = currDigit -9
            } else {
                currDigit = currDigit
            }
        }
        return currDigit
    }).reduce((accum, curElem)=> accum + Number(curElem), 0)

    return console.log(str), doubleNum % 10 === 0
}


console.log(validateCreditCard("4539 1488 0343 6467")) // Output: true
console.log(validateCreditCard("8273 1232 7352 0569")) // Output: false
