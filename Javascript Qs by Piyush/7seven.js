const rishabh = {
    name: "Rishabh bhatt",
    sayName: function(){
        console.log(this.name)
    }
}

const jhon = {
    name: "Jhone Doe",
    sayName: function(){
        console.log(this.name)
    }
}

jhon.sayName.call(rishabh)