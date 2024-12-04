var fullname = "Rishabh Bhatt"

var obj = {
    fullname: "Hacked Full Name",

    prop: {
        fullname: "Inside Prop",
        getFullname: function(){
            return this.fullname
        },
    },
    
    getFullname: function() {
        return this.fullname
    },

    getFullnameV2: () => this.fullname, // in this case we're getting "undefined", but in browser this is a window function

    getFullnameV3: (function(){
        return this.fullname;
    })()
}

console.log(obj.prop.getFullname()) // inside prop
console.log(obj.getFullname()) // Hacked Full Name
console.log(obj.getFullnameV2()) // undefined
console.log(obj.getFullnameV3()) // error