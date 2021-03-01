// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five

var removeDuplicates = function(nums) {
    let i = 0
    while(i < nums.length){
        let j = i+1
        if(nums[i] === nums[j]){
            nums.splice(j,1)
        }
        if(nums[i] !== nums[j]){
            i++
        }
        j++
    }
    return nums.length
};

let nums = [1,1,2]
removeDuplicates(nums)