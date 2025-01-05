// Prototypes & Prototypal Inheritance

// const p1 ={
//     fname: 'Rishabh',
//     lname: 'Bhatt',
//     getFullName(){
//         return `${this.fname} ${this.lname}`
//     }
// }

// const p2 = Object.create(p1)

// console.log("This is p1",p1.fname)
// console.log("This is p2",p2.getFullName())

// p2.__proto__.fname = "Hack"
// console.log("This is the value after hacking p1: ",p1.fname)


const p1 = { 
    xp1: 'I an inside P1'
}

const p2 = { 
    xp1: 'I an inside P2',
    __proto: p1
}
const p3 = { 
    xp1: 'I an inside P1',
    __proto: p2
}

class Student {
    constructor() {
        this.fname = "Rishabh"
    }
    getName() {
        return this.fname
    }
}