// Event Emitter

class MyEventEmitter {
    constructor() {
        // Stores event listeners
        this.__event_listeners = {};
    }

    on(event, listener) {
        // Register the listener for an event
        if (!this.__event_listeners[event]) {
            this.__event_listeners[event] = [];
        }
        this.__event_listeners[event].push(listener);
        return true;
    }

    emit(event, ...args) {
        // Trigger event listeners
        if (!this.__event_listeners[event]) {
            return false;
        }
        this.__event_listeners[event].forEach(listener => listener(...args));
        return true;
    }

    off(event, listener) {
        // Remove a specific listener for an event
        if (!this.__event_listeners[event]) return false;
        this.__event_listeners[event] = this.__event_listeners[event].filter(l => l !== listener);
        return true;
    }

    once(event, listener) {
        // Register a one-time listener
        const onceListener = (...args) => {
            listener(...args);
            this.off(event, onceListener);
        };
        this.on(event, onceListener);
    }
}

// Example usage:
const emitter = new MyEventEmitter();
const greet = name => console.log(`Hello, ${name}!`);

testEmitter.on('greet', greet);
testEmitter.emit('greet', 'Alice'); // Outputs: Hello, Alice!
testEmitter.off('greet', greet);
testEmitter.emit('greet', 'Alice'); // No output
