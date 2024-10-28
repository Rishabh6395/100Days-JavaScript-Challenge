// Write a functin to convert a string to camelCase & snake_case

const toCamelCase = (str) =>{
    str = str.trim().split(" ")
    str = str.map((currElem, index) =>{
        if(index === 0 ) return currElem
        else{
            return currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase()
        }
    })
    console.log(str)
    return str.join('')
}

console.log(toCamelCase('hello world')); // Outputs: helloWorld

const toSnakeCase = (str) =>{
    return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}


// todo Homework:
console.log(toSnakeCase('helloWorld')); // Outputs: hello_world