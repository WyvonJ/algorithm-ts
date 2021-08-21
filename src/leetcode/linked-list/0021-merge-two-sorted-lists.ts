import ListNode from './defs/list-node';

/**
 * 21. 合并两个有序链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */
export default function MergeTwoSortedLists() {}

MergeTwoSortedLists();

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

/**
 * 递归法
 * @param {(ListNode | null)} l1
 * @param {(ListNode | null)} l2
 * @return {*}  {(ListNode | null)}
 */
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

/**
 * 迭代法
 * @param {(ListNode | null)} l1
 * @param {(ListNode | null)} l2
 * @return {*}  {(ListNode | null)}
 */
function mergeTwoLists1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1);
  const prev = dummy;
  while(l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
  }
  // l1或l2遍历后还有可能有为空的情况
  prev.next = l1 === null ? l2 : l1;
  return dummy.next;
}
