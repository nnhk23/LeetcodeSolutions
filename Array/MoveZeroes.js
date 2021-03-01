// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    for(let num of nums){
        if (num === 0){
            let temp = nums.splice(nums.indexOf(num), 1)
            nums.push(temp[0])
        }
    }
};

const nums = [0,1,0,3,12]
moveZeroes(nums)