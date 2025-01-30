// Problem: Implement a Debounce Function

// Write a function debounce that takes a function fn and a delay wait. The debounce function should return a new function that:

// Delays the execution of fn until wait milliseconds have passed since the last call.

// If the debounced function is called again before the delay expires, the timer should reset.

function debounce(fn, wait) {
    let timeoutId;
  
    return function (...args) {
      // Clear the previous timer
      clearTimeout(timeoutId);
  
      // Set a new timer
      timeoutId = setTimeout(() => {
        fn.apply(this, args); // Call the original function with arguments
      }, wait);
    };
  }


  function logMessage() {
    console.log("Message logged!");
  }
  
  const debouncedLog = debounce(logMessage, 300);
  
  debouncedLog(); // Called at 0ms
  debouncedLog(); // Called at 100ms
  debouncedLog(); // Called at 200ms
  
  // After 300ms of inactivity, "Message logged!" should be logged once.