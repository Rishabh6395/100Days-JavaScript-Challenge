
# Sum of Digits Problem

## Problem Description
Write a function that takes a number as input and returns the sum of its digits.

### Constraints
- The input number will always be a positive integer.
- The input number can have multiple digits.
- The output should be the sum of all the digits in the input number.

### Example Usage
```javascript
console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(4321)); // Output: 10
console.log(sumOfDigits(123456)); // Output: 21
```

## Solutions

### Method 1: Using String Conversion
This method involves converting the input number into a string and then processing it as an array of digits.

#### Steps
1. **Convert the number to a string**: The input number is converted to a string using `String(num)`. For example, `1234` becomes `"1234"`.
2. **Create an array of digits**: `Array.from(String(num), Number)` creates an array of individual digits from the string, converting each character back into a number. So, `"1234"` becomes `[1, 2, 3, 4]`.
3. **Sum the array elements**: The `reduce` function sums up all the digits in the array. It starts with an initial sum of `0` and adds each element to the sum.
4. **Return the result**: The sum of the digits is returned.

#### Code Example
```javascript
const sumOfDigits = (num) => {
    let arr = Array.from(String(num), Number);
    return arr.reduce((accum, currElem) => accum + currElem, 0);
}

// Example usage:
console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(4321)); // Output: 10
console.log(sumOfDigits(123456)); // Output: 21
```

#### Explanation
- `String(num)` converts the number to a string.
- `Array.from(String(num), Number)` turns the string into an array of numbers.
- `reduce` sums up the elements in the array.

#### Pros and Cons
- **Pros**: Easy to understand and implement.
- **Cons**: Converts the number to a string, which can be less efficient for large numbers.

---

### Method 2: Using Mathematical Operations
This method uses mathematical operations to sum the digits without converting the number to a string.

#### Steps
1. **Initialize a sum variable**: Start with `sum = 0`.
2. **Loop while the number is greater than 0**:
   - Use the modulus operator `%` to get the last digit of the number.
   - Add this last digit to the sum.
   - Remove the last digit from the number using integer division (`Math.floor(num / 10)`).
3. **Repeat** until the number becomes `0`.
4. **Return the sum**.

#### Code Example
```javascript
const sumOfDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // Get the last digit and add it to the sum
        num = Math.floor(num / 10); // Remove the last digit from the number
    }
    return sum;
}

// Example usage:
console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(4321)); // Output: 10
console.log(sumOfDigits(123456)); // Output: 21
```

#### Explanation
- `num % 10` gives the last digit.
- `Math.floor(num / 10)` removes the last digit.
- The process repeats until the number is reduced to zero.

#### Pros and Cons
- **Pros**: Efficient in terms of memory usage and does not involve string conversion.
- **Cons**: Slightly more complex logic compared to the first method.

---

## Conclusion
Both methods solve the problem of summing the digits of a number, but they differ in approach:
- **Method 1** involves string manipulation, making it easier to understand but potentially less efficient.
- **Method 2** uses mathematical operations, providing a more memory-efficient solution without string conversion.

Choose the method based on your specific requirements. For larger numbers or memory-sensitive applications, **Method 2** is recommended.
