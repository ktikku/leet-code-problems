/**
 * @param {number[]} nums
 * @return {number}
 */
function formHashMap(nums) {
    let elementsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (elementsMap.get(nums[i])) {
            elementsMap.set(nums[i], elementsMap.get(nums[i]) + 1);
        }
        else {
            elementsMap.set(nums[i], 1);
        }
    }
    return elementsMap;
}
var majorityElement = function (nums) {
    let answer;
    const elementsMap = formHashMap(nums);
    elementsMap.forEach((value, key) => {
        if (value > nums.length / 2) {
            answer = key;
        }
    });
    return answer;
};