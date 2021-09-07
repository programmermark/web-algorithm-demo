/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 把下个节点的值赋值给当前节点
  node.val = node.next.val;
  // 删除下个节点
  node.next = node.next.next;
};
