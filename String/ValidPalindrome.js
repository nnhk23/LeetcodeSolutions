// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

var isPalindrome = function(s) {
    // empty string is a palindrome
    if(s.length <= 1){
        return true
    } else {
        // get rid of special characters ("," "." "!" etc)
        // everything to lowercase
        let str = s.toLowerCase().replace('_', '').match(/[\w\d]/g)
        if (!!str){
            str = str.join('')
            let i = 0
            let j = str.length - 1
            while(i < j){
                if (str[i] !== str[j]){
                    return false
                }
                i++
                j--
            }
            return true
        } else {
            return false
        }
    }  
};

let s = "0P"
isPalindrome(s)
// Big O: O(N)