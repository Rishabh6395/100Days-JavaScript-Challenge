// Implement a Batch Function

// Write a function batch that takes a function fn and a batch size n. The batch function should return a new function that:

// Collects n calls to the function.

// Executes fn once with an array of arguments from all n calls.

// Resets the batch after fn is executed.

function batch(fn, n) {
    let batchArgs = []; // Array to store arguments
  
    return function (...args) {
      batchArgs.push(args); // Add current arguments to the batch
  
      if (batchArgs.length === n) {
        // Execute fn with the batch
        fn(batchArgs);
        batchArgs = []; // Reset the batch
      }
    };
  }

  function processBatch(batch) {
    console.log("Processing batch:", batch);
  }
  
  const batchedProcess = batch(processBatch, 3);
  
  batchedProcess(1); // No output
  batchedProcess(2); // No output
  batchedProcess(3); // "Processing batch: [[1], [2], [3]]"
  batchedProcess(4); // No output
  batchedProcess(5); // No output
  batchedProcess(6); // "Processing batch: [[4], [5], [6]]"