// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// @param {number} n
// @return {number}


var climbStairs = function(n) {
    let countSteps = function(remainingSteps, track){
        if (remainingSteps < 0) return 0
        if (remainingSteps === 0) return 1
        if(track[remainingSteps]) return track[remainingSteps]

        track[remainingSteps] = countSteps(remainingSteps - 1, track) + countSteps(remainingSteps - 2, track)
        return track[remainingSteps]
    }

    return countSteps(n, {})
};

climbStairs(9)