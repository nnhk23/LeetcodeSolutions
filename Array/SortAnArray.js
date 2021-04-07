var sortArray = function(nums) {
    //     loop through array and set an initial value
    //     another loop to compare remaining values to see which one is smaller
    //     swap values between those 2
    let len = nums.length
    for(let i = 0; i < len; i++){
        let smallestIndx = i
        for(let j = i + 1; j < len; j++){
            if(nums[j] < nums[smallestIndx]){
                smallestIndx = j
            }
        }
        if(i !== smallestIndx){
            let temp = nums[smallestIndx]
            nums[smallestIndx] = nums[i]
            nums[i] = temp
        }
    }
    return nums
};