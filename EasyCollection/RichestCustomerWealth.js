var maximumWealth = function(accounts) {
    let dict = {}
    for(let i = 0; i < accounts.length; i++){
        for(let amount of accounts[i]){
            if (dict[i]){
                dict[i] += amount
            } else {
                dict[i] = amount
            }
        }
    }

    let richest = 0
    Object.keys(dict).forEach(cus => {
        if(dict[cus] > richest) richest = dict[cus]
    })
    return richest
};

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])