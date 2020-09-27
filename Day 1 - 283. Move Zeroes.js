/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let i = nums.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] === 0) {
                for (let k = j; k < i - 1; k++) {
                    nums[k] = nums[k + 1]
                    nums[k + 1] = 0
                }
            }
        }
    }
};