// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]


// @param {number[]} digits
// @return {number[]}


var plusOne = function(digits) {
    for(let i = digits.length - 1; i > 0; i--){
        digits[i]++
        if(digits[i] < 10){
            // exit loop if num is 1 digit
            return digits
        } else {
            digits[i] = 0
        }
    }

    digits.unshift(1)
    return digits
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
plusOne(digits)