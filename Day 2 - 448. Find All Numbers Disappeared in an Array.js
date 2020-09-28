/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time complexity : O(n)
// Space complexity : O(1)
var findDisappearedNumbers = function (nums) {
    const len = nums.length;
    let missingArray = [];
    for (let i = 0; i < len; i++) {
        let curr = Math.abs(nums[i]);
        nums[curr - 1] = - Math.abs(nums[curr - 1]);
    }
    for (i = 0; i < len; i++) {
        if (nums[i] > 0) {
            missingArray.push(i + 1);
        }
    }
    return missingArray;
};