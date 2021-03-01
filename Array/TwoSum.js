// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// @param {number[]} nums
// @param {number} target
// @return {number[]}

var twoSum = function(nums, target) {
    let result = []

    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i)
                result.push(j)
                return result
            }
        }
    }
};

let nums = [3,2,4]
let target = 6
twoSum(nums, target)