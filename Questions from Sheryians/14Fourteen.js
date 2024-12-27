// Loop an array of objects and remove all objects which don't have gender's value male.

var arr = [
    {name: 'Rishabh', gender: 'male'},
    {name: 'Harshita', gender: 'female'},
    {name: 'avcd', gender: 'nonspecified'},
    {name: 'harsh', gender: 'male'},
    {name: 'harshi', gender: 'female'},
    {name: 'avinya', gender: 'female'},
    {name: 'avi', gender: 'male'}
]

var newarr = arr.filter(function(elem){
    return elem.gender === 'male'
})
console.log(newarr)