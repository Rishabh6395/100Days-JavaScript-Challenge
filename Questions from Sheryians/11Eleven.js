// Write a Javascript function to get the number of occurrnecees of each letter in specified string.

function occ(str){
    var occurrnecees = {}
    str.split("").forEach(function(elem){
        if(occurrnecees.hasOwnProperty(elem) === false){
            occurrnecees[elem] = 1
        }
        else{
            occurrnecees[elem]++
        }
    })
    return occurrnecees
}

console.log(occ("apple"))