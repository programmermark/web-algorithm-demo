/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n2 = target - nums[i];
    if (map.has(n2)) {
      return [map.get(n2), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
