// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

var findDisappearedNumbers = function(nums) {
    let arraySize = Math.max(...nums)
    let missingNum = []
    let i = 0
    let j = 1
    
    nums.sort((a, b) => a-b)
    
    while(j <= arraySize){
        if(nums[i] === j){
            i++
            j++
        } else if (nums[i] - j == -1){
            i++
        } else {
            missingNum.push(j)
            j++
        }
    }

    return missingNum
};

findDisappearedNumbers([4,3,2,7,8,2,3,1])