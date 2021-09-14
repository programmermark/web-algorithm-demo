const map1 = new Map();

/** 新增键值对 */
map1.set("name", "张三");
map1.set({ name: "张三" }, "张三");

/** 根据键名获取值 */
const name = map1.get("name");
console.log("name", name);
const name2 = map1.get({ name: "张三" });
/** 输出undefined，因为传入的对象{ name: "张三" }和开始设置的对象内存空间不同，
 * 无法获取到开始设置的键名对应的值 */
console.log("name2", name);

/** 删除键值对 */
/** 删除单个 */
map1.delete("name");
/** 删除所有 */
map1.clear();

/** 修改键值对的值 */
map1.set("name", "李四");
map1.set("name", "王五");
