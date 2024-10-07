// Q: write a function find LongestWord that taks a string as inpurt and returns the longest work in the string. If there are multiple longest words, return the first one encountered.

// Contraints:
// The input string may contain alphabetic character, digits, spaces and punctuation.
// The input string is non-empty

// Note;
// If the input string is empty or contains only whitespace, the fucntion should return an false
// The fucntion should ignore leading and trailing whitespace when determining the longest word.

//fact->
// Trim is for removing whitespaces from begining and the end of the sentence

const findLongestWord = (str) => {
  if (str.trim().length === 0) return false;

  words = str.split(" ");

  // 1st method:
  // words = words.sort((a,b)=> b.length - a.length)
  // console.log(words);
  // // return words.at(-1)
  // return words[0]

  // 2nd Method:
  return words.reduce(
    (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
    ""
  );
};

console.log(
  findLongestWord("Watch my youtube channel and please consider to subscribe")
);
