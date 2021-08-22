import LinkedListUtils from './defs/linked-list-utils';
import ListNode from './defs/list-node';

/**
 * 2. 两数相加
 * https://leetcode-cn.com/problems/add-two-numbers/
 */
export default function AddTwoNumbers() {
  const l1 = LinkedListUtils.build([9, 9]);
  const l2 = LinkedListUtils.build([9, 9, 9, 9]);
  const result = addTwoNumbers(l1, l2);
  LinkedListUtils.print(reverse(result));
}

// AddTwoNumbers();

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 将两条链表翻转
  l1 = reverse(l1);
  l2 = reverse(l2);
  const reversedL1 = l1;
  const reversedL2 = l2
  // 进位
  let carry = 0;

  let curr;

  while (l1 !== null || l2 !== null) {
    const val = (l1?.val || 0) + (l2?.val || 0) + carry;
    // 计算进位
    carry = val >= 10 ? 1 : 0;
    if (l1 !== null) {
      l1.val = val % 10;
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2.val = val % 10;
      l2 = l2.next;
    }
  }
  console.log(reversedL2, reversedL1);
  LinkedListUtils.print(reversedL1)
  LinkedListUtils.print(reversedL2)
  
  // 如果还有进位的话 要在最前面补一个
  if (carry === 1) {

  }
  return l1 ? reversedL2 : reversedL1;
}

/**
 * 翻转链表
 * @param {(ListNode | null)} head
 * @return {*}
 */
function reverse(head: ListNode | null) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
