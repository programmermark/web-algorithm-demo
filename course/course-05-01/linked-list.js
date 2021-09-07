/** 模拟链表： 用对象来模拟链表 */

/** 链表特性：链表的next指针指向了链表的下一个元素 */

let a = { val: "a" };
let b = { val: "b" };
let c = { val: "c" };
let d = { val: "d" };

a.next = b;
b.next = c;
c.next = d;

/** 遍历链表: 定义一个变量等于链表表头，在表头有值的情况下，不断将变量指向当前链表元素的下一个元素 */

// let p = a;

// while (p) {
//   console.log(p.val);
//   p = p.next;
// }

/** 插入元素 */

const e = { val: "e" };
c.next = e;
e.next = d;

/** 删除元素 */

c.next = d;

/** 反转两个节点 */
/** 备注：经过上述的操作后，目前的链表节点为： a -> b -> c -> d，e -> d */
/** 以节点 b 和节点 c 为例子，进行节点反转 */

/**
 * 思路：
 *     1. 反转前：b.next === c, c.next === d, 反转后：c.next === b, b.next === d,
 *     2. 用一个临时变量存储c.next（也就是d），再进行反转
 *
 */

const tmp = c.next;
c.next = b;
b.next = tmp;
a.next = c;

let p = a;

while (p) {
  console.log(p.val);
  p = p.next;
}
