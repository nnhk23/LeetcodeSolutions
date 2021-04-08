var sumOfUnique = function(nums) {
//     iterate through nums to create a dictionary that keeps track of number's occurence.
//     iterate through dictionary, sum up unique elements.
    let dict = {}
    for(let num of nums){
        if(!dict[num]){
            dict[num] = 1
        } else {
            dict[num] += 1
        }
    }
    
    let sum = 0
    for(let k in dict){
        if(dict[k] === 1) sum += parseInt(k)
    }
    return sum
};