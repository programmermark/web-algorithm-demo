let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add("hello world");
mySet.add("hello world");
let obj1 = { a: 1 };
mySet.add(obj1);
mySet.add(obj1);
mySet.add({ a: 1 }); // 不会去重，对象{ a: 1 }和obj1内存地址不同

/** 总结： 集合会对添加的相同元素进行去重，其中数值相同但是存储空间不同的对象被认为是不同值，不会被去重 */

/** has()方法判断set是否包含该元素 */
mySet.has(obj1);
mySet.has(1);

/** delete()方法删除集合中的元素 */
mySet.delete(obj1);

/** 遍历集合: 集合的key和value值是相同的 */

for (const item of mySet) {
  console.log(item);
}

for (const item of mySet.keys()) {
  console.log(item);
}

for (const item of mySet.values()) {
  console.log(item);
}

for (const [key, value] of mySet.entries()) {
  console.log(key, value);
}

/** Set转换成array */

const myArr1 = [...mySet];
const myArr2 = Array.from(mySet);

/** Array转换成Set */

const mySet2 = new Set([1, 3, 4, 5]);

/** 求集合交集 */
function intersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}

/** 求集合差集: set1里存在而set2中不存在的 */
function difference(set1, set2) {
  return new Set([...set1].filter((item) => !set2.has(item)));
}
