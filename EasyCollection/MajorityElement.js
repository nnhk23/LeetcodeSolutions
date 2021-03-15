var majorityElement = function(nums) {
    let majorCount = nums.length / 2
    let lib = {}
    for(let num of nums){
        if(lib[num]){
            lib[num] += 1
        } else {
            lib[num] = 1
        }
        
        if (lib[num] > majorCount){
            return num
        }
    }
};

majorityElement([3,2,3])