// Coding Challenge: Random Hex Color Generator

// Write a function randomHexColor that generates a random hexadecimal color code each time it is called. The function should return a string representing the random color code in the format '#RRGGBB', where RR, GG and BB are two-digit hexadecimal numbers reresenting the red, green and blue components of the colors, respectively.

// Constraints:
// The output color code should always starts with # followed by six hexadecimal characters (RRGGBB)
// The function should not take any parameters.
// The generated color codes should be unique and evenly distributed across the entire range of possible hexadecimal color codes.

const randomHexColor = () => {
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`
}

console.log(randomHexColor())