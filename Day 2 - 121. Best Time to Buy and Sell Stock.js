/**
 * @param {number[]} prices
 * @return {number}
 */

//Brute Force 
// Complexity Analysis
// Time complexity : O(n^2)
// Space complexity : O(1)

var maxProfit = function (prices) {
    let maxGain = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (maxGain < prices[j] - prices[i]) {
                maxGain = prices[j] - prices[i];
            }
        }
    }
    return maxGain;
};



/**
 * @param {number[]} prices
 * @return {number}
 */

// One Pass
// Complexity Analysis
// Time complexity : O(n)
// Space complexity : O(1)

var maxProfit = function (prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxGain = 0;
    for (let i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }
        else if (prices[i] - minPrice > maxGain) {
            maxGain = prices[i] - minPrice;
        }
    }
    return maxGain;
};