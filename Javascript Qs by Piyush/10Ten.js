// Objects in Javascript - Function Constructors and ES6 Class

// NOTE: CONSTRUCTOR FUNCTION ALLWAYS BE IN PASCALCASING LIKE WE DID IN (Person) EXAMPLE, BUT NOWONWARDS WE USE "class" KEYWORD TO USE CONSTRUCTOR

// Normal Funtion - camelCasing:
// getAge(), addNums(), printThis()
// Example:

// NOTE: OBJECT LITERALS ARE SIMPLE BUT, THIS DOES NOT ACT AS A BLUE PRINT

// const person = {
//     fname: "Rishabh",
//     lanme: "Bhatt",
//     contact: 9999999999,

//     getName: function() {
//         console.log("Rishabh")
//     }
// }

// Constructor Function - PascalCasing:
// PersonDetails()
// Example:

// function Person(fname, lname, contact){
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;

//     this.getName = function(){
//         console.log(this.fname, this.lname)
//     }

//     this.getContact = function(){
//         console.log(this.contact)
//     }
// }

// const person1 = new Person("Rishabh", "Bhatt", 9999999)
// const p2 = new Person("Jhon", "Doe", 888888)
// const p3 = new Person("Jane", "Doe", 777777)
// p2.getName()
// p2.getContact()


// NOTE: Now we can use this after ES6 if we want use constructor..

class Person{
    constructor(fname, lname, contact){
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    getContact(){
        console.log(this.contact)
    }
    getName(){
        console.log(this.fname, this.lname)
    }
}
const person1 = new Person("Rishabh", "Bhatt", 9999999)
const p2 = new Person("Jhon", "Doe", 888888)
const p3 = new Person("Jane", "Doe", 777777)
person1.getContact()
person1.getName()



