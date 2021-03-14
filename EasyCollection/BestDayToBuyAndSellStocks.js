// Example 1:

// Input: prices = [7,5,1,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function(prices) {
    
    let i = prices.length - 1
    while(i >= 0){
        if(prices[i] < prices[i-1]){
            i--
        } else {
            break;
        }

        if(i === 0) return 0
    }

    let buyPrice = 10000
    let profit = 0

    i = 0
    while(i < prices.length ){
        if(prices[i] < buyPrice && i !== prices.length - 1){
            buyPrice = prices[i]
        } else if (prices[i] - buyPrice > profit){
            profit = prices[i] - buyPrice
        }

        i++
    }
    return profit
};

maxProfit([2,4,1])