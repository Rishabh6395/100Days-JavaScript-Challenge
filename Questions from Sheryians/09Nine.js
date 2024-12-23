// Write a Javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case


function capaitalize(str){
    var allwords = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1)
    })

    return allwords.join(" ")
    
}

console.log(capaitalize("my name is rishabh bhatt"))