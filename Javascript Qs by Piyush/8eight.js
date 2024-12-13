const rishabh = {
    name: "Rishabh Bhatt",
    sayName: function(){
        console.log(this.name)
    },
}

// setTimeout(rishabh.sayName, 3 * 1000);

setTimeout(()=> rishabh.sayName(), 3 * 1000);