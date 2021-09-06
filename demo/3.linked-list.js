// /** 模拟链表 */

// const a = { val: "a" };
// const b = { val: "b" };
// const c = { val: "c" };
// const d = { val: "d" };
// const e = { val: "e" };

// /** 创建链表 */
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// /** 插入元素 */
// const f = { val: "f" };
// c.next = f;
// f.next = d;

// /** 删除元素 */
// b.next = f;

// /** 遍历链表 */
// let p = a;
// while (p) {
//   console.log(p.val);
//   p = p.next;
// }

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// function arrayToLinkedList(array) {
//   if (!Array.isArray(array)) {
//     return '传入的参数必须是数组'
//   } else if (array.length = 0) {
//     return "传入的参数必须是数组长度不能为0";
//   } else {
//     let nodeList = {val: array[0]};
//     let length = array.length
//     while (length) {
//       const node = {
//         val: array[1],
//       }
//       nodeList.next = node;
//       array.shift();
//     }
//   }
// }

function array2List(arr, type = 0) {
  if (!arr.length) return null;
  let header = { data: arr[0], next: null };
  let obj = header;
  for (let i = 1; i < arr.length; i++) {
    obj.next = { data: arr[i], next: null };
    obj = obj.next;
  }
  if (type) obj.next = header;
  return header;
}

var list = array2List([1, 2, 3, 4]);
console.log(list);
