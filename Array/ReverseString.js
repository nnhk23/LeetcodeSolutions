// @param {character[]} s
// @return {void} Do not return anything, modify s in-place instead.

var reverseString = function(s) {
    // let l = s.length - 1
    // for(let i = 0; i < s.length; i++){
    //     let temp = s[i]
    //     s[i] = s[l - i]
    //     s[l - i] = temp
    //     if((l - i) === Math.floor(s.length / 2)) return
    // }
    
    s.reverse()
};

let s = ["h","e","l","l","o"]
reverseString(s)