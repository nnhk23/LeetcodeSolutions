var numIdenticalPairs = function(nums) {
//     iterate through nums array to create a hashtable.
//     key: number, value: indices of duplicates in array.
//     iterate through dict's keys and find count amount of subarrays.
//     count total of good pairs.
    let dict = {}
    for(let i = 0; i < nums.length; i++){
        if(!dict[nums[i]]){
            dict[nums[i]] = [i]
        } else {
            dict[nums[i]].push(i)
        }
    }
    
    let totalGoodPairs = 0
    for(let num in dict){
        if(dict[num].length > 1){
            let len = dict[num].length
            for(let i = 0; i < len; i++){
                for(let j = i+1; j < len; j++){
                    totalGoodPairs += 1
                }
            }
        }
    }
    return totalGoodPairs
};

numIdenticalPairs([1,2,3,1,1,3])