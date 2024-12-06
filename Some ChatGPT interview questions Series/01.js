

// Implement a debounce function in JavaScript. The debounce function ensures that a given function is not called repeatedly in quick succession. Instead, it should only be invoked after a specified delay has passed since the last call.


// Detailed Solution:

const debounce = (func, delay) => {
    let timer; // A variable to hold the timer
  
    return function (...args) {
      const context = this; // Save the context of the function call
  
      // Clear any existing timer before setting a new one
      clearTimeout(timer);
  
      // Set a new timer to call the function after the specified delay
      timer = setTimeout(() => {
        func.apply(context, args); // Call the function with the correct context and arguments
      }, delay);
    };
  };
  
  // Example usage:
  const log = () => console.log("Debounced Function Called");
  const debouncedLog = debounce(log, 2000);
  
  debouncedLog(); // Starts a 2-second timer
  debouncedLog(); // Resets the timer
  debouncedLog(); // Resets the timer
  
  // Only after 2 seconds of no further calls, "Debounced Function Called" will be logged.
  