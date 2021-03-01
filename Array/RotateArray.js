// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


// @param {number[]} nums
// @param {number} k
// @return {void} Do not return anything, modify nums in-place instead.


var rotate = function(nums, k) {
    if(k > 1){
        let j = k
        let i = 1
        while(j > 0){
            let indx = nums.length - j
            let temp = nums[i-1]
            nums[i-1] = nums[indx]
            nums[indx] = temp
            j--
            i++
        }
    }

    // nums.unshift(...nums.splice(nums.length-k)); -> more efficient

    console.log(nums)
};



let nums = [1,2,3,4,5,6,7]
let k = 3
rotate(nums, k)