/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  const map = new Map();
  let res = 0;

  for (let r = 0; r < s.length; r += 1) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      // 指针向前移动一位
      l = map.get(s[r]) + 1;
    }
    res = Math.max(r - l + 1, res);
    map.set(s[r], r);
  }

  return res;
};
