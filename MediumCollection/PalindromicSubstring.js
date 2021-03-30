// @param {string} s
// @return {number}


var countSubstrings = function(s) {
    // 4948 ms, 44.7mb
    // let count = 0

    // for(let i = 0; i < s.length; i++){
    //     for(let j = i+1; j <= s.length; j++){
    //         let substr = s.slice(i, j)
    //         if (substr === substr.split('').reverse().join('')){
    //             count += 1
    //         }
    //     }
    // }
    
    // return count

    // 480ms, 44.5mb
    // let count = 0
    // const isPalindromic = function(substr){
    //     let i = 0
    //     let j = substr.length - 1
    //     while(i < j){
    //         if(substr[i] !== substr[j]){
    //             return false
    //         }
    //         i++
    //         j--
    //     }
    //     return true
    // }

    // for(let i = 0; i < s.length; i++){
    //     for(let j = i+1; j <= s.length; j++){
    //         let substr = s.slice(i, j)
    //         isPalindromic(substr) ? count += 1 : null
    //     }
    // }
    // return count
};

countSubstrings("fdsklf")