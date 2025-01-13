// JavaScript proxy and reflect objects

const p1 ={
    fname: 'rishabh',
    lname: 'bhatt',
    age: 18
}

const p1Proxy = new Proxy(p1, {
    get(target, prop){
        if(prop in target) return target[prop]
        return false
    },
    set(target, prop, value){
        if(!(prop in target)) throw new Error(`${prop} does not exitst`)
        switch(prop){
            case 'fname':
            case 'lname':
                if(typeof value !== 'string')
                    throw new Error(`${prop} must be a string`)
                break;
            case 'age':
                if(typeof value !== 'number')
                    throw new Error(`${prop} must be a number`)
                if(value<=0) throw new Error(`${prop} must be > zero`)
        }
    target[prop] = value;
    }
})

p1Proxy.age = 1
p1Proxy.fname = '10'


console.log(p1Proxy)