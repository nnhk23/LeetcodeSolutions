// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    // return empty string if there's no common prefix

    // if (strs.length === 0){
    //     return ""
    // } else {
    //     let prefLib = {}
    //     for(let j = 0; j < strs.length-1; j++){
    //         // find vowel index
    //         if(strs[j] !== strs[j+1]){
    //             let vowIndx
    //             for(let i = 0; i < strs[j].length; i++){
    //                 if(strs[j][i] === "a" || strs[j][i] === "e" || strs[j][i] === "i" || strs[j][i] === "o" || strs[j][i] === "u"){
    //                     vowIndx = i
    //                     break;
    //                 }
    //             }

    //             if (prefLib[strs[j].slice(0, vowIndx)] && vowIndx > 0){
    //                 prefLib[strs[j].slice(0, vowIndx)] += 1
    //             } else if (vowIndx === 0) {
    //                 prefLib[strs[j].slice(0, 1)] = prefLib[strs[j].slice()] ? prefLib[strs[j].slice()] += 1 : 1
    //             } else {
    //                 prefLib[strs[j].slice(0, vowIndx)] = 1
    //             }
    //         }
    //     }
        
    //     if (Object.keys(prefLib).length > 1){
    //         return ""
    //     } else if (Object.keys(prefLib).length === 0){
    //         return (strs[0])
    //     } else {
    //         return (Object.keys(prefLib)[0])
    //     }
    // }
    let result = ""

    if (strs.length === 0){
        return result
    } else {
        for(let i = 0; i < strs[0].length; i++){
            const char = strs[0][i]

            for(let j = 1; j < strs.length; j++){
                if(strs[i][j] !== char) return result
            }
            
            result = result + char
        }
    }
};

let strs = ["flower","flow","flight"]
longestCommonPrefix(strs)