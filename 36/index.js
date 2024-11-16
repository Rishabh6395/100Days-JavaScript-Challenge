// Convert Object to Array and Vice Versa

const obj = {
    name: 'Rishabh Bhatt',
    age: 30,
    city: 'Pune',
}

// Convert the object to an array of key-value pairs.

let entries = Object.entries(obj)
console.log(entries.flat())

// Convert the array of key-value pairs back to an object.

let newObj = Object.fromEntries(entries)
console.log(newObj)