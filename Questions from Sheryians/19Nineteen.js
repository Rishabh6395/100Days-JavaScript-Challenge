// Write a JavaScript program to shuffle an array.

function shufflethearr(arr) {
  // Sabse pahle kitne area shuffle krne hai
  var totalShuffleArea = arr.length;
  // ek random number nikalo
  while (totalShuffleArea > 0) {
    totalShuffleArea--;
    var indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea);
    var temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[indexToBeExchanged];
    arr[indexToBeExchanged] = temp;
  }
  return arr;
}

console.log(shufflethearr([1, 2, 3, 4, 5, 6, 7, 8]))
