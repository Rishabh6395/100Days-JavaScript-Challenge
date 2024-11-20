// Simple Bar Chart from Array Data

// Create a function generateBarChart that takes an array of numbers and generates a simple text-based bar chart.


const generateBarChart = (arr) => {
    const newArr = arr.map((currElem, index)=>{
        let star = ""
        let num = 0
        while(num<currElem){
            star = star + "*"
            num++
        }
        return `${index+1}: ${star}`
    })
    return newArr.join("\n")
}

console.log(generateBarChart([5, 3, 9, 2]))
// OP:
// 1: *****
// 2: ***
// 3: *********
// 4: **