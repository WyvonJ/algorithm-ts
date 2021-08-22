import { compare, generate, swap, time } from './utils';

export default function Intertion() {
  const nums = generate(10000);
  // const original = nums.slice(0);
  const custom = nums.slice(0);
  const custom1 = nums.slice(0);
  const native = nums.slice(0);

  time('原生排序', () => {
    native.sort((a, b) => a - b);
  });
  time('插入排序', () => {
    sort(custom);
  });
  time('插入排序: 优化版本1', () => {
    sort1(custom1);
  });

  compare(custom, native);
  compare(custom1, native);
}

// Intertion();

/**
 * 基础版本, 两两比较, 交换位置
 * @param {number[]} nums
 */
function sort(nums: number[]) {
  // 在i向右移动的过程中, 它左边的元素总是有序的, 所以到底之后排序完成
  for (let i = 1; i < nums.length; i++) {
    // 从i开始, 跟i之前的进行比较, 小于则进行交换
    // 直接把判断 nums[j] < nums[j - 1]写到for循环中去
    for (let j = i; j > 0 && nums[j] < nums[j - 1]; j--) {
      // 就是跟前面那个数比较, 小的话就交换
      swap(nums, j - 1, j);
    }
  }
}

/**
 * 优化版本, 在内循环中将较大的元素都向右移动 而不总是交换两个元素
 * @param {number[]} nums
 */
function sort1(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    // 先保存最开始比较的值
    const curr = nums[i];
    let j = i;
    // 从i开始, 向左移动 同时比较是否大于
    while (j > 0 && nums[j - 1] > curr) {
      // 大于当前的数就将后面的值赋值为前面一个
      // 即移动一位
      nums[j] = nums[j - 1];
      j--;
    }
    // 最后将剩下来的空位用保存的curr填充
    nums[j] = curr;
  }
}

// TODO 优化版本2 往前移动时使用二分查找位置
