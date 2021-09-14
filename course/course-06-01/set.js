// 去重复
const arr = [1, 2, 3, 2, 1, 4, 5];

/** Array.from 配合Set给数组去重 */
const arr2 = Array.from(new Set(arr));
/** 解构 配合Set给数组去重 */
const arr3 = [...new Set(arr)];

// 判断某元素是否在集合中
const set = new Set(arr);
const has = set.has(6); /** false */

// 求交集
const set2 = new Set([2, 3, 4]);
/** 交集结果 */
const set3 = new Set([...set].filter((item) => set2.has(item)));
