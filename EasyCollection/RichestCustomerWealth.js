var maximumWealth = function(accounts) {
    // let dict = {}
    // for(let i = 0; i < accounts.length; i++){
    //     for(let amount of accounts[i]){
    //         if (dict[i]){
    //             dict[i] += amount
    //         } else {
    //             dict[i] = amount
    //         }
    //     }
    // }

    // let richest = 0
    // Object.keys(dict).forEach(cus => {
    //     if(dict[cus] > richest) richest = dict[cus]
    // })
    // return richest

    let arr = []
    for(let i = 0; i < accounts.length; i++){
        let totalMoney = 0
        for(let amount of accounts[i]){
            totalMoney += amount
        }
        arr.push(totalMoney)
    }

    return Math.max(...arr)
};

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])