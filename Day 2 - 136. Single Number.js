/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity O(n)
// Space Complexity O(1)
var singleNumber = function(nums) {
    let a = 0;
    for( let i = 0; i < nums.length; i++) {
        a = a ^ nums[i];
    }
    return a;
};