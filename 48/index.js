// Validate Hex Color Code:

// Write a regular expression to validate a hex color code(e.g #a3c113)

const validateHexColor = (regx) => {
    return /^#([A-Fa-f\d]{3}|[A-Fa-f0-9]{6})$/.test(regx)
}

console.log(validateHexColor("#a3c113")) // true
console.log(validateHexColor("#fff")) // true
console.log(validateHexColor("#123456")) // false
console.log(validateHexColor("a3c113")) // false
console.log(validateHexColor("#g3c113")) // false