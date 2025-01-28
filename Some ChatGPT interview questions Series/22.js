// Write a JavaScript function that takes an array of numbers and a target number as arguments. The function should return an array of all pairs of numbers from the input array that add up to the target. Each pair should only appear once, and the numbers in the pairs should be in ascending order.

// const numbers = [2, 4, 3, 5, 7, 8, 1];
// const target = 9;

// OUTPUT: [[2, 7], [4, 5], [1, 8]]

function paierer(numbers, target){

    const result = [];
    const seen = new Set();

    for (const num of numbers) {
        const complement = target - num;

        if (seen.has(complement)) {
            // Add the pair in ascending order
            result.push([Math.min(num, complement), Math.max(num, complement)]);
        }

        // Add the current number to the seen set
        seen.add(num);
    }

    return result;
}

console.log(paierer([2, 4, 3, 5, 7, 8, 1], 9)) // OUTPUT: [[2, 7], [4, 5], [1, 8]]

