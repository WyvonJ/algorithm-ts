import ListNode from './defs/list-node';

/**
 * 206. 反转链表
 * https://leetcode-cn.com/problems/reverse-linked-list/
 */
export default function ReverseLinkedList() {

}

ReverseLinkedList();

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * 迭代法
 * @param {(ListNode | null)} head
 * @return {*}  {(ListNode | null)}
 */
function reverseList(head: ListNode | null): ListNode | null {
  // null 1 -> 2 -> 3 -> 4 -> 5 -> null
  // ↓
  // 5 -> 4 -> 3 -> 2 -> 1 -> null
  let prev = null;
  let curr = head;
  while(curr !== null) {
    // 先保存下一个, 否则会丢失
    const next = curr.next;
    // 重点部分 将当前指针反向指回到前一个prev
    curr.next = prev;
    // 将循环主体往后移动一位, 即用于进入下一次循环 i++的感觉
    prev = curr;
    curr = next;
  }
  return prev;
}
