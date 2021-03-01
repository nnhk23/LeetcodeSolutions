// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

var intersect = function(nums1, nums2) {
    let result = []

    for(let i = 0; i < nums1.length; i++){
        if(nums2.includes(nums1[i])){
            result.push(nums1[i])
            nums2.splice((nums2.indexOf(nums1[i])), 1)
        }
    }
    
    return result
};

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]
intersect(nums1, nums2)