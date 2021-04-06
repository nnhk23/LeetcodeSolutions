var isSubsequence = function(s, t) {
    if(s.length > t.length){
        return false
    } else {
        let tArray = t.split('')
        let subsArray = s.split('')
        let i = 0
        let j = 0 
        while(i < subsArray.length){
            while(j < tArray.length){
                if(j === tArray.length - 1){
                    if(tArray[j] !== subsArray[i] || i !== subsArray.length - 1){
                        return false
                    }
                } else if (subsArray[i] === tArray[j]) {
                    j++
                    break;
                }
                j++
            }
            i++
        }
        
        return true
    }
};

isSubsequence("aaaaaa", "bbaaaa")