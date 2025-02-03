// Implement a Throttle Function

// Write a function throttle that takes a function fn and a number limit. The throttle function should return a new function that:

// Executes fn at most once every limit milliseconds.

// Returns the result of fn.

function throttle(fn, wait) {
    let canRun = true; // Flag to track if fn can be executed
  
    return function (...args) {
      if (canRun) {
        // Execute fn immediately
        fn.apply(this, args);
        canRun = false; // Disable further executions
  
        // Reset the flag after the delay
        setTimeout(() => {
          canRun = true;
        }, wait);
      }
    };
  }

// Example usage:

function logMessage() {
    console.log("Message logged!");
  }
  
  const throttledLog = throttle(logMessage, 300);
  
  throttledLog(); // "Message logged!" (executed immediately)
  throttledLog(); // Ignored
  throttledLog(); // Ignored
  
  setTimeout(() => throttledLog(), 400); // "Message logged!" (executed after delay)

//   function logMessage(message) {
//     console.log(message);
//   }
  
//   const throttledLog = throttle(logMessage, 300);
  
//   throttledLog("Hello"); // "Hello" (executed immediately)
//   throttledLog("World"); // Ignored
  
//   setTimeout(() => throttledLog("Again"), 400); // "Again" (executed after delay)