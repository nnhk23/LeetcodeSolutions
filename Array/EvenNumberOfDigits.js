var findNumbers = function(nums) {
    let count = 0

    for(let num of nums){
        if (`${num}`.length % 2 === 0){
            count ++
        }
    }

    console.log(count)
};

let nums = [12,345,2,6,7896]
findNumbers(nums)