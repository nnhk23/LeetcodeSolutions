// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false

var isValid = function(s) {
    // Solution 1: 84ms
    // const lib = {'(' : ')', '[' : ']', '{' : '}'}
    // let stack = []
    // let valid = true

    // for(let br of s){
    //     if(lib[br]){
    //         closing.unshift(lib[br])
    //     } else {
    //         if(closing.shift() !== br){
    //             valid = false
    //         }
    //     }
    // }

    // if(closing.length !== 0) valid = false

    // return valid

    // Solution 2: 80ms
    const lib = {'(' : ')', '[' : ']', '{' : '}'}
    let stack = []
    for(let br of s){
        if(br === '(' || br === '[' || br === '{'){
            stack.push(br)
        } else {
            let temp = stack.shift()
            if(lib[temp] !== br) return false
        }
    }

    if(stack.length !== 0){
        return false
    }

    return true
};

isValid("((([]))")