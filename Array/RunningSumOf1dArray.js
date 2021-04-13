var runningSum = function(nums) {
    let arr = []
    arr.push(nums[0])
    for(let i = 1; i < nums.length; i++){
        arr.push(arr[i-1] + nums[i])
    }
    return arr
};