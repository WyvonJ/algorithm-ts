import LinkedListUtils from './defs/linked-list-utils';
import ListNode from './defs/list-node';

/**
 * 160. 相交链表
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 */
export default function IntersectionOfTwoLinkedLists() {
  // 在8这个节点相交
  const { headA, headB } = buildIntersection([1, 9, 1, 2, 4], [3, 2, 4], 3, 1);
  LinkedListUtils.print(headA);
  LinkedListUtils.print(headB);
  const result = getIntersectionNode(headA, headB);
  console.log(result);
}

function buildIntersection(numsA: number[], numsB: number[], skipA: number, skipB: number) {
  const headA = LinkedListUtils.build(numsA);
  const headB = LinkedListUtils.build(numsB);
  const skipANode = LinkedListUtils.getByIndex(headA, skipA) as ListNode;
  const skipBNode = LinkedListUtils.getByIndex(headB, skipB);
  skipANode.next = skipBNode;
  return { headA, headB };
}

// IntersectionOfTwoLinkedLists();

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  // 用数组存下之前遍历的节点
  const nodes: Array<ListNode | null> = [];
  while (headA !== null || headB !== null) {
    if (headA === headB) return headA;
    if (nodes.indexOf(headB) !== -1) {
      return headB;
    } else {
      nodes.push(headA);
      headA = headA?.next || null;
    }
    if (nodes.indexOf(headA) !== -1) {
      return headA;
    } else {
      nodes.push(headB);
      headB = headB?.next || null;
    }
  }
  return null;
}
