// Problem: Implement a Retry Mechanism

// Write a function retry that takes an asynchronous function fn and a number maxAttempts. The retry function should:

// Execute fn and return its result if successful.

// If fn throws an error, retry the function up to maxAttempts times.

// If all attempts fail, throw the last error.


function retry(fn, maxAttempts, delay = 1000) {
    return async function (...args) {
      let lastError;
  
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          const result = await fn(...args);
          return result; // Success: return the result
        } catch (error) {
          lastError = error; // Store the last error
          if (attempt < maxAttempts) {
            console.log(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
            await new Promise((resolve) => setTimeout(resolve, delay)); // Delay
          }
        }
      }
  
      // All attempts failed: throw the last error
      throw lastError;
    };
  }

//   async function fetchData() {
//     return "Data fetched successfully";
//   }
  
//   const retryFetch = retry(fetchData, 3);
  
//   retryFetch()
//     .then((result) => console.log(result)) // "Data fetched successfully"
//     .catch((error) => console.error(error)); // Should not run

let attempt = 0;
async function fetchData() {
  attempt++;
  if (attempt < 3) {
    throw new Error("Network error");
  }
  return "Data fetched successfully";
}

const retryFetch = retry(fetchData, 3);

retryFetch()
  .then((result) => console.log(result)) // "Data fetched successfully"
  .catch((error) => console.error(error)); // Should not run