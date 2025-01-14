// Write a function reorderArray that takes an array of integers and reorders it such that all the even numbers appear before the odd numbers while maintaining their relative order.

function reorderArray(arr) {
  let evenarr = [];
  let oddarr = [];

  arr.forEach((element) => {
    if (element % 2 === 0) evenarr.push(element);
    else {
      oddarr.push(element);
    }
  });
  return evenarr.concat(oddarr)
}

const arr = [3, 1, 2, 4, 7, 6, 9];
console.log(reorderArray(arr)); // Should print: [2, 4, 6, 3, 1, 7, 9]
