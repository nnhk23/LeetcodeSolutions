var longestPalindrome = function(s) {
    let hashMap = new Map()
    let count = 0

    for(let i = 0; i < s.length; i++){
        if(hashMap.get(s[i])){
            count += 2
            hashMap.delete(s[i])
        } else {
            hashMap.set(s[i], 1)
        }
    }

    if(hashMap.size > 0) count += 1
    return count
};

let s = "abccccdd"

longestPalindrome(s)