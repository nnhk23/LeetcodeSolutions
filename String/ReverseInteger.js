// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

var reverse = function(x) {
    let arr = x.toString().split('')
    let reversed
    
    // seperate "-" from integers (if x is a negative integer)
    if (arr[0] === '-'){
        reversed = arr.splice(0,1) + arr.reverse().join('')
    } else {
        reversed = arr.reverse().join('')
    }
    
    // get rid of 0 if it's the first integer
    reversed = reversed[0] === '0' ? reversed.slice(0, reversed.length) : reversed

    // [-231, 231 - 1] range
    if (Math.pow(-2,31) <= parseInt(reversed) && parseInt(reversed) <= (Math.pow(2,31) - 1)){
        return reversed
    } else {
        return 0
    }
};
let x = 1534236469
reverse(x)
// O(N)