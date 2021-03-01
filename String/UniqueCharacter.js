// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

var firstUniqChar = function(s) {
    // return -1 if there is no unique character.
    // return index of first unique character.
    let charLib = {}
    for(let i = 0; i < s.length; i++){
        charLib[s[i]] ? charLib[s[i]] += 1 : charLib[s[i]] = 1
    }

    for(let i = 0; i < s.length; i++){
        if (charLib[s[i]] === 1){
            console.log(i)
        }
    }
    console.log('-1')
};

let s = "lomnlomn"
firstUniqChar(s)
// Big O: O(N)