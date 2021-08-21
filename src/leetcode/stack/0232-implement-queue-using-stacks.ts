class MyQueue {
  // 输入栈
  inStack: any[] = [];
  // 输出栈
  outStack: any[] = [];
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  /**
   * 将元素 x 推到队列的末尾
   * 因为队列是FIFO先入先出, 所以最新加入的元素需要放到栈底(后入后出)
   * @param {number} x
   * @memberof MyQueue
   */
  push(x: number): void {
    this.inStack.push(x);
  }

  /**
   * 从队列的开头移除并返回元素
   * @return {*}  {number}
   * @memberof MyQueue
   */
  pop(): number {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
    const result = this.outStack.pop();
    while (this.outStack.length > 0) {
      this.inStack.push(this.outStack.pop());
    }
    // 从翻转了的栈2中弹出最上面的 也就是最新的
    return result;
  }

  /**
   * 返回队列开头的元素
   * 即栈2的栈底
   * @return {*}  {number}
   * @memberof MyQueue
   */
  peek(): number {
    // 将栈2的元素放到栈1 翻转过来
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
    const result = this.outStack[this.outStack.length - 1];
    // 将元素放回栈2
    while (this.outStack.length > 0) {
      this.inStack.push(this.outStack.pop());
    }
    return result;
  }

  /**
   * 如果队列为空，返回 true ；否则，返回 false
   * @return {*}  {boolean}
   * @memberof MyQueue
   */
  empty(): boolean {
    return this.inStack.length === 0;
  }
}

/**
 * 232. 用栈实现队列
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/
 */
export default function ImplementQueueUsingStacks() {
  const myQueue = new MyQueue();
  myQueue.push(1); // queue is: [1]
  myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
  console.log(myQueue.peek()); // return 1
  console.log(myQueue.pop()); // return 1, queue is [2]
  console.log(myQueue.empty()); // return false
}

// ImplementQueueUsingStacks();

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
