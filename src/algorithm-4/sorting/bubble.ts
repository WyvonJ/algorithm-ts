import { compare, generate, swap, time } from './utils';

export default function Bubble() {
  const nums = generate(10000);
  // const nums = [1, 2, 3, 4, 5, 6, 7];
  const original = nums.slice(0);
  const custom = nums.slice(0);
  const native = nums.slice(0);

  time('原生排序', () => {
    native.sort((a, b) => a - b);
  });
  time('冒泡排序排序', () => {
    sort(custom);
  });
  compare(custom, native);
}

// Bubble();

/**
 *
 * @param {number[]} nums
 */
function sort(nums: number[]) {
  // i用来界定j循环到哪个位置, 因为交换完之后会把第i个元素变成最大的
  for (let i = nums.length; i > 0; i--) {
    // 从0到i, 将j和j+1比较 大的话就交换, 这样就把最大值放到了最右边
    for (let j = 0; j < i; j++) {
      // 这个条件不能放到for循环里去!!!
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
}
