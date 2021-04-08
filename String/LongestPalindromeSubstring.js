// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"

var longestPalindrome = function(s) {
    let len = s.length

    while(len > 0){
        for(let i = 0; i < s.length - len + 1; i++){
            let str = s.slice(i, i+len)

            if(isPalindrom(str)){
                return str
            }
        }
        len--
    }
};

var isPalindrom = function(str){
    let i = 0
    let j = str.length - 1
    while(i < j){
        if( str[i] !== str[j]){
            return false
        }
        i++
        j--
    }
    return true
}

let s = "abbadcd"

longestPalindrome(s)
// O(N^2)
