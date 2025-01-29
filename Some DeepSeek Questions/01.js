// Problem: Implement a Time-Bound Memoization Function

// Create a memoize function that caches the results of a function call for a specified duration. The memoized function should:

// Return cached results if available and not expired

// Automatically invalidate cache entries after expiration time

// Handle multiple arguments as cache keys

// Work with asynchronous functions (returns a Promise if the original function does)

function memoize(fn, ttl){
    const cache = new Map() // Stores cached results
    return function(...args){
        const key = JSON.stringify(args)
        const now = Date.now()

        // Check if cached result is valid
        if(cache.has(key)){
            const entry = cache.get(key)
            if(now < entry.expiresAT){
                return entry.value;
            }
            // Clear the timeout and delte expired entry
            clearTimeout(entry.timeoutId)
            cache.delete(key)
        }
        
        // Compute new result
        const result = fn(...args)
        const expiresAT = now + ttl;

        // Schedule cache cleanup
        const timeoutId = setTimeout(() => {
            cache.delete(key)
        }, ttl)

        // Store in cache
        cache.set(key, { value: result, expiresAT, timeoutId})

        return result;
    }
}

function add(a, b) {
    console.log("Calculating...");
    return a + b;
  }
  
  const memoizedAdd = memoize(add, 1000); // Cache for 1 second
  
  console.log(memoizedAdd(2, 3)); // "Calculating..." → 5
  console.log(memoizedAdd(2, 3)); // (no log) → 5 (cached)
  
  // After 1 second
  setTimeout(() => {
    console.log(memoizedAdd(2, 3)); // "Calculating..." → 5 (cache expired)
  }, 1500);