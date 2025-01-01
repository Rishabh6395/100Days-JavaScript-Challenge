// Write a JavaScript program to find the most frequent item of an array.

function freq(arr){
    var freq = {}

    // Count Frequencies:
    arr.forEach(function(elem){
        if(freq.hasOwnProperty(elem)) freq[elem]++;
        else freq[elem] = 1;
    })

    // Find the Most Frequent Item:
    var ans = Object.keys(freq).reduce(function(acc, num){
        return freq[acc] > freq[num] ? acc : num;
    })
    console.log(ans)
}

freq([1,2,5,5,3,56,3,2,4,5,5,1,3,20])