// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

// @param {string} haystack
// @param {string} needle
// @return {number}

// O(N) complexion

var strStr = function(haystack, needle) {
    // return -1 if needle is not in haystack.
    // return 0 when needle is an empty string.
    // return the index of the first occurrence of needle in haystack.
    let num = needle.length

    if(num === 0){
        return 0
    } else {
        for(let i = 0; i < haystack.length; i++){
            let substr = haystack.slice(i, num)
            if(needle === substr){
                return i
            }
            num += 1
        }
    }

    return -1
};

let haystack = "aaaaaaa"
let needle = "baa"
strStr(haystack, needle)