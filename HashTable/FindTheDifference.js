var findTheDifference = function(s, t) {
    let dict = {}
    for(let char of s){
        if(!dict[char]) {
            dict[char] = 1
        } else {
            dict[char]++
        }
    }
    
    for(let char of t){
        if(dict[char] > 0){
            dict[char]--
        } else {
            return char
        }
    }
};