
# isPowerOfTwo Function Explanation

This document explains how to determine if a number is a power of two using a bitwise operator approach in JavaScript.

## Concept
A number is a power of two if it has exactly one bit set to `1` in its binary representation. For example:

- \(2^0 = 1\) → Binary: `0001`
- \(2^1 = 2\) → Binary: `0010`
- \(2^2 = 4\) → Binary: `0100`
- \(2^3 = 8\) → Binary: `1000`

Notice that for all powers of two, there is exactly one `1` in the binary form, and all other bits are `0`.

## Bitwise Explanation
We can use the expression `(num & (num - 1))` to check if a number is a power of two:

1. **`num - 1` flips all the bits after the rightmost `1` in `num`.** For example:
   - If `num = 8` (binary `1000`), then `num - 1` is `7` (binary `0111`).
   - If `num = 4` (binary `0100`), then `num - 1` is `3` (binary `0011`).

2. **Bitwise AND (`&`) between `num` and `num - 1` results in `0` for powers of two.**
   - When you perform `num & (num - 1)`, all bits are zeroed out because `num` has only one `1` bit, and all lower bits are zero.
   - For example:
     - \(8 & 7 = 1000 & 0111 = 0000\)
     - \(4 & 3 = 0100 & 0011 = 0000\)

3. **If `(num & (num - 1))` equals `0`, then `num` is a power of two.**

## Final Code
To ensure we only check positive numbers, we also add a condition `num > 0`:

```javascript
const isPowerOfTwo = (num) => {
    return num > 0 && (num & (num - 1)) === 0;
};
```

- `num > 0`: Ensures `num` is positive (since powers of two are positive).
- `(num & (num - 1)) === 0`: Checks if `num` is a power of two.

## Why It Works
The bitwise approach is efficient because it directly uses the properties of binary representation to identify powers of two without looping or dividing the number.
