// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
// */

var isAnagram = function(s, t) {
    // create a library to keep track of number of letters in s
    if(s === t){
        return true
    } else if (t.length !== s.length){
        return false
    } else if (s.length === t.length) {
        let sLib = {}

        for(let c of s){
            sLib[c] = (sLib[c] || 0) + 1
        }

        for(let c of t){
            if (!sLib[c]) return false
        }
        return true
    }
};

let s = "anagtam"
let t = "nbgbram" 
isAnagram(s, t)

// Big O: O(N)