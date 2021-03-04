// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


// @param {string} s
// @return {number}
 

var lengthOfLongestSubstring = function(s) {
    let subs = ''
    let collection = []

    if(s.length < 2){
        return s.length
    } else {
        for(let i = 0; i < s.length; i++){
            let j = i + 1
            subs = subs.length > 0 ? subs : subs.concat(s[i])
            while(j < s.length){
                if (subs.includes(s[j])){
                    length = subs.length
                    collection.push(subs.length)
                    subs = ''
                    break;
                }
                subs = subs.concat(s[j])
                collection.push(subs.length)
                j++
            }
        }
    }
    return Math.max(...collection)
    console.log(collection) 
};

let s = "abcabcbb"
lengthOfLongestSubstring(s)