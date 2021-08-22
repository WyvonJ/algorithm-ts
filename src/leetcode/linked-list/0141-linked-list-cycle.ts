import ListNode from './defs/list-node';

/**
 * 141. 环形链表
 * https://leetcode-cn.com/problems/linked-list-cycle/
 */
export default function LinkedListCycle() {

}

// LinkedListCycle();

/**
 * 双指针 快慢指针判断
 * @param {(ListNode | null)} head
 * @return {boolean} 
 */
function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    // 两倍速
    fast = fast.next.next;
    // 正常移动
    slow = slow?.next || null;
    // 相遇则说明链表含有环
    if (fast === slow) {
      return true
    }
  }
  return false;
}
