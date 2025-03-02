// // Implement an LRU Cache (Least Recently Used Cache)

// class LRUCache{
//     constructor(capacity){
//         this.capacity = Number(capacity)
//         this.length = 0
//         this.map = new Map() // <Key> : <Node Address>
//         this.head = null;
//         this.tail = null; // LRU Node
//     }

//     #removeNode(node){
//         if(!node) return

//         if(node.prev){
//             node.prev.next = node.next;
//         }
        
//         if(node.next){
//             node.next.prev = node.prev;
//         }
//         if(node === this.head){
//             this.head = node.next;
//         }

//         if(node === this.tail){
//             this.tail = node.prev
//         }
//     }

//     get(key){

//     }

//     put(key, value){
//         // Check if we have capacity
//         if(this.length == this.capacity){
//             if(!this.map.has(key)){
//                 this.#removeNode(this.tail)
//             }
//         }
//         // Case: If the key is already in cache store
//         if(this.map.has(key)){
//             // 1. Remove the older node.
//             this.#removeNode(this.map.get(key))
//         }
//         const node = {
//             next: this.head,
//             prev: null,
//             key,
//             value,
//         }

//         this.map.set(key, node)
//         this.head = node;

//         if(this.tail === null){
//             this.tail = node
//         }

//         this.length += 1
//     }

//     debug(){
//         const current = this.head
//         const arr = []
//         while(head !== null){
//             arr.push(current)
//             current = current.next
//         }

//         return arr.reduce((acc, curr) => acc.concat(`-->[ [${curr.key}]: [${curr.value}] ]-->`), '')
//     }
// }

// const cache = new LRUCache(3)
// cache.put(1, 10)
// cache.put(2, 10)
// cache.put(3, 30)

// console.log(cache.debug())


class LRUCache {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.length = 0;
        this.map = new Map(); // Key -> Node
        this.head = null; // Most recently used
        this.tail = null; // Least recently used
    }

    #removeNode(node) {
        if (!node) return;

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        this.map.delete(node.key);
        this.length--;
    }

    #addToFront(node) {
        node.next = this.head;
        node.prev = null;

        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        this.map.set(node.key, node);
        this.length++;
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this.#removeNode(node);
        this.#addToFront(node);

        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.#removeNode(this.map.get(key));
        } else if (this.length === this.capacity) {
            this.#removeNode(this.tail);
        }

        const newNode = { key, value, next: null, prev: null };
        this.#addToFront(newNode);
    }

    debug() {
        let current = this.head;
        let arr = [];
        while (current !== null) {
            arr.push(`[ ${current.key} : ${current.value} ]`);
            current = current.next;
        }
        return arr.join(" <-> ");
    }
}

// Testing
const cache = new LRUCache(3);
cache.put(1, 10);
cache.put(2, 20);
cache.put(3, 30);
console.log(cache.debug()); // [ 3 : 30 ] <-> [ 2 : 20 ] <-> [ 1 : 10 ]

cache.get(2);
console.log(cache.debug()); // [ 2 : 20 ] <-> [ 3 : 30 ] <-> [ 1 : 10 ]

cache.put(4, 40);
console.log(cache.debug()); // [ 4 : 40 ] <-> [ 2 : 20 ] <-> [ 3 : 30 ] (1 is removed)

