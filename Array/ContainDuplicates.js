// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(nums) {
    let dict = {}
    for(let num of nums){
        if (dict[num]){
            return true
        } else {
            dict[num] = 1
        }
    }

    return false
};