// Check Object Emptiness

// Write a function isEmptyObject that takes an object input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

// Your task is to implement the isEmptyObject function using JavaScript and return a message indicating whether the object is empty or not.

const isEmptyObject = (obj) =>{
    // for(let key in obj){
    //     if(obj.hasOwnProperty(key)){
    //         return `it's not empty`
    //     }
    // }
    // return `it's empty`

    return Object.keys(obj).length === 0
}

console.log(isEmptyObject({name: 'rishabh'})) // Output: "it's not empty"
console.log(isEmptyObject({})) // Output: "it's empty"
console.log(isEmptyObject({keyWithNull: null})) // Output: "it's not empty"
console.log(isEmptyObject({keyWithNull: undefined})) // Output: "it's not empty"