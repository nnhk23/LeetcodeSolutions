// Example 1:

// Input: x = 121
// Output: true


var isPalindrome = function(x) {
    let num = x.toString()
    let i = 0
    let j = num.length - 1
    while(j > i){
        if(num[j] !== num[i]){
            return false
        }
        i++
        j--
    }
    return true
};

isPalindrome(123)