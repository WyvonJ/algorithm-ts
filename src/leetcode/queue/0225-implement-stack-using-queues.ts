/**
 * 225. 用队列实现栈
 * https://leetcode-cn.com/problems/implement-stack-using-queues/
 */
export default function ImplementStackUsingQueues() {}

ImplementStackUsingQueues();

class MyStack {
  // 主栈队列, 也就是按照栈的取元素的方式, 将栈顶元素放在最前面
  stackQueue: any[] = [];
  // 辅助队列, 用来将进来的元素翻转
  reverseQueue: any[] = [];
  constructor() {
  }
  push(x: number): void {
    // 首先检查输入输出栈是否有元素
    while (this.stackQueue.length > 0) {
      this.reverseQueue.push(this.stackQueue.shift())
    }
    // 全部移到翻转栈中后 加入新元素, 此时stackQueue为空, 也就是加到了队列最前面
    this.stackQueue.push(x)
    // 再将元素转移回去
    while(this.reverseQueue.length > 0) {
      this.stackQueue.push(this.reverseQueue.shift())
    }
  }
  // 移除并返回栈顶元素
  pop(): number {
    return this.stackQueue.shift();
  }
  top(): number {
    return this.stackQueue[0];
  }
  empty(): boolean {
    return this.stackQueue.length === 0;
  }
}
/**
 * Your MyStack object will be instantiated and 
called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
