import ListNode from './list-node';

export default class LinkedListUtils {
  static build(nums: number[]): ListNode | null {
    if (nums.length === 0) {
      return null;
    }
    const root = new ListNode(nums[0]);
    let current = root;
    let i = 1;
    while (i < nums.length) {
      const next = new ListNode(nums[i]);
      current.next = next;
      current = next;
      i++;
    }
    return root;
  }

  static print(head: ListNode | null) {
    const result = [];
    while (head !== null) {
      result.push(head.val);
      head = head.next;
    }
    console.log(result);
  }

  static getByIndex(head: ListNode | null, index: number = 0) {
    let count = 0;
    while (head !== null) {
      if (index === count) {
        return head;
      }
      head = head.next;
      count ++;
    }
    return null;
  }
}
