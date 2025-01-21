// Calculate the Minimum Difference:

function minimumDiff(arr){

    if(arr.length === 0) {
        return console.log("Null");
    }

    // Step1: Sort the array.
    const sortedArr = arr.sort((a, b) => a-b)

    // Caluclate the difference
    const differenceArray = [];
        for(let i = 1; i < sortedArr.length; i++){
            differenceArray.push(Math.abs(arr[i] - arr[i - 1]));
        };
    // return differenceArray;
    // console.log(differenceArray)
    let finalDiff = differenceArray.at(0)
    console.log(finalDiff)
}

minimumDiff([4, 9, 1, 32, 13]) // OUTPUT: 3

// TEST CASES: 

minimumDiff([8, 3, 14, 1, 6]) // OUTPUT: 2
// Explanation: Sorted array: [1, 3, 6, 8, 14]. Minimum difference is between 6 and 8.

minimumDiff([2, 4, 6, 8, 10]) // OUTPUT: 2
// Explanation: Array is already sorted. Minimum difference is between 2 and 4 (or any two consecutive numbers).

minimumDiff([-5, -2, 1, 6]) // OUTPUT: 3
// Explanation: Sorted array: [-5, -2, 1, 6]. Minimum difference is between -5 and -2.

minimumDiff([3, 3, 6, 6, 8]) // OUTPUT: 0
// Explanation: Duplicates (3 and 3) give a difference of 0.

minimumDiff([100, 200]) // OUTPUT: 100
// Explanation: With only two elements, the difference is simply 200 - 100 = 100.

minimumDiff([100000, 99998, 99999, 100001]) // OUTPUT: 1
// Explanation: Sorted array: [99998, 99999, 100000, 100001]. Minimum difference is between 99998 and 99999.

minimumDiff([42]) // OUTPUT: null
// Explanation: With only one element, no pair exists, so the result is `null`.

minimumDiff([]) // OUTPUT: null
// Explanation: No elements in the array, so no valid difference can be calculated.

minimumDiff([5, 5, 5, 5]) // OUTPUT: 0
// Explanation: All elements are the same, so the minimum difference is 0.

minimumDiff([-10, -1, 5, 8]) // OUTPUT: 6
// Explanation: Sorted array: [-10, -1, 5, 8]. Minimum difference is between -1 and 5.




//  REAL/ OPTIMIZED SOLUTION:

function minimumDiff(arr) {
    // Handle edge cases: empty array or single element
    if (arr.length === 0) {
        console.log("Null"); // No pairs exist
        return;
    }
    if (arr.length === 1) {
        console.log("Null"); // Only one element, no pairs exist
        return;
    }

    // Step 1: Sort the array in ascending order
    const sortedArr = arr.sort((a, b) => a - b);

    // Step 2: Initialize the minimum difference with a very large value
    let minDiff = Infinity;

    // Step 3: Calculate the difference between adjacent elements
    for (let i = 1; i < sortedArr.length; i++) {
        const diff = Math.abs(sortedArr[i] - sortedArr[i - 1]);
        minDiff = Math.min(minDiff, diff); // Update the minimum difference
    }

    // Step 4: Output the result
    console.log(minDiff);
}
