import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { compare, generate, swap, time } from './utils';

export default function Counting() {
  const nums = generate(100);
  // const nums = [3, 5, 12, 7, 8, 4, 9, 1];
  // const original = nums.slice(0);
  const custom = nums.slice(0);
  const native = nums.slice(0);

  time('原生排序', () => {
    native.sort((a, b) => a - b);
  });

  time('计数排序', () => {
    sort(custom);
  });

  compare(custom, native);
}

Counting();

/**
 * 将创建一个新数组用来计数
 * 数组长度为原数组中的最大值
 * @param {number[]} nums
 */
function sort(nums: number[]) {
  // 1. 找到最大的元素值max
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  // 2. 建立一个长度为max的数组 填充为0
  const counter = new Array(max).fill(0);
  // 3. 对于原数组中的每个数, 将arr中对于位置改为nums[i]出现的个数
  // 比如 原数组 [2,3,2] 则新数组为 [0, 2, 1]
  for (let i = 0; i < nums.length; i++) {
    counter[nums[i] - 1]++;
  }
  // 4. 再将新数组放回原数组 从头开始遍历原数组
  let index = 0; // 指向原数组用的
  for (let i = 0; i < counter.length; i++) {
    // 不为0 的才能放回原数组
    while (counter[i] !== 0) {
      // 取值就是对于的索引值 + 1
      nums[index] = i + 1;
      index++;
      counter[i] --; // 把计数器都使用完之后 再遍历下一个元素
    }
  }
}
