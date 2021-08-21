import ListNode from './defs/list-node';

/**
 * 141. 环形链表
 * https://leetcode-cn.com/problems/linked-list-cycle/
 */
export default function LinkedListCycle() {}

LinkedListCycle();

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | 
null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  // 快指针如果到了null则说明非环形
  while (fast !== null && slow !== null) {
    // 注意快慢指针相遇就说明有环形
    if (fast === slow) {
      return true;
    }
    // 快指针一次要移动两位
    fast = fast.next && fast.next.next || null;
    slow = slow.next;
  }
  return false;
}
