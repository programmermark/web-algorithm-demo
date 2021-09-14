/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map1 = new Map();
  nums1.forEach((item) => {
    map1.set(item, true);
  });
  const result = [];
  nums2.forEach((item) => {
    if (map1.has(item)) {
      result.push(item);
      map1.delete(item);
    }
  });
  return result;
};

/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection1 = function (nums1, nums2) {
  /** 利用Map的键名唯一性，对数组进行去重 */
  const map1 = new Map();
  nums1.forEach((item) => {
    map1.set(item, true);
  });
  const map2 = new Map();
  nums2.forEach((item) => {
    map2.set(item, true);
  });
  const result = [];
  /** 遍历Map，获取交集 */
  for (const key of map2.keys()) {
    if (map1.has(key)) {
      result.push(key);
    }
  }
  return result;
};

/**
 * 缺点，创建了2个map，消耗内存空间大
 * 优点，简单容易理解
 */
