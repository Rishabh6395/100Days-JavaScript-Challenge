// Interview Question: Count Occurence of Character

// Task:
//  Write a function called countChar that takes two parameters: a string and a charcter to count. The function should return the number of times the specified Character appears in the string.

const countChar = (word, char)=>{
    word = word.toLowerCase();
    char = char.toLowerCase()

    totalCount = word.split("").reduce((accum, cur)=>{
        if(cur === char){
            accum++
        }
        return accum
    },0)
    // console.log(totalCount);
    return totalCount
    
}


console.log(countChar("MissIssippi", "I")) //output: 4

// todo Constraints:
// the function should be case-sensitive.
// the function should handle both lowecase and uppercase Character
// The Character parameter can be any printable ASCII Character (the function should accept any Character that is part of the ASCII Character set and is printable)