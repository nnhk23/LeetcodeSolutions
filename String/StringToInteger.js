// Example 4:

// Input: s = "words and 987"
// Output: 0
// Example 5:

// Input: s = "-91283472332"
// Output: -2147483648

// Example 3:

// Input: s = "4193 with words"
// Output: 4193

// Input: s = "   -42"
// Output: -42


// @param {string} s
// @return {number}

var myAtoi = function(s) {
    // ignore white space
    // check if number is - or +
    // return 0 if reach character before number
    // check if num is in the range [-2^31, 2^31 - 1]
    let result = parseInt(s)
    if(result){
        if(Math.pow(-2,31) <= result && result <= (Math.pow(2,31) - 1)){
            return result
        } else {
            result = result <= -1 ? Math.pow(-2, 31) : (Math.pow(2, 31) - 1)
            return result
        }
    } else {
        return 0
    }
};

let s = "words and 987"
myAtoi(s)