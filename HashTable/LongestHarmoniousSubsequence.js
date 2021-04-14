var findLHS = function(nums) {
    // create hash table to keep track of number's occurence.
    // return 0 if Object.keys(dict).length === 1
    // iterate through Object.keys, pay attention to num + 1 and num - 1.
    let dict = {}
    for(let num of nums){
        if(!dict[num]){
            dict[num] = 1
        } else {
            dict[num]++
        }
    }
    
    let len = []
    let numKeys = Object.keys(dict)

    if(numKeys.length === 1) return 0

    for(let num of numKeys){
        num = parseInt(num)
        if(dict[num+1]){
            len.push(dict[num+1] + dict[num])
        } else if (dict[num-1]){
            len.push(dict[num - 1] + dict[num])
        }
    }
    return len.length === 0 ? 0 : Math.max(...len)
};

findLHS([1,3,5,7,9,11,13,15,17])