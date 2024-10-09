// Interview Question:

// Write a function called checkTriangleType that takes three parameters repersenting the lengths of the sides of a triangle: "equilateral", "isosceles" or "scalene"

const checkTriangleType = (a,b,c) =>{
    if (a===b && b===c) {
        return("This is Equilateral Triangle")
    }
    else if(a ===b || b===c || a===c){
        return("This is Isosceles Triangle")
    }
    else{
        return("This is Scalene Triangle")
    }
}

console.log(checkTriangleType(3,3,3)) // O/p: "equilateral"
console.log(checkTriangleType(3,4,3)) // O/p: "isosceles"
console.log(checkTriangleType(5,8,6)) // O/p: "scalene"

// todo The function should adhere to the following rules:
// If all three sides are of equal length, return "equilateral"
// If only two sides are of equal length, return "isosceles"
// If all three sides have different lengths, return "scalene"