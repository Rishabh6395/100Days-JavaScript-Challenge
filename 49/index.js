// Date Validation

// Write a function named isValidDate that takes a single input representing a date and determines if it is a valid date in the format MM/DD/YYYY. The valid date range should be from January1, 1900, to December 31, 2099.

const isValidDate = (regx) => {
    return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/((19|20)[0-9]{2})$/.test(regx)
}

console.log(isValidDate("12/15/2028"))
console.log(isValidDate("01/29/2021"))
console.log(isValidDate("06/31/2027"))
console.log(isValidDate("13/01/1800"))