// Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', 'u' as vowels. (both lowecase and uppercase).

const countVowels = (str)=>{
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = str.split('')

    let count =0
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count ++
        }
    }
    return count
}

// Example Usage:
console.log(countVowels("Helloo World")); // Output: 4
console.log(countVowels("ThE quIck brOWn fOx")); // Output: 5
console.log(countVowels("Brrrp")); // Output: 0

// Constraints:
// The input string may contain letters in both uppercase and lowecase.
// The output should be a non-negative interger representing the count of vowels in the input string.
