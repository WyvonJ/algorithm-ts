import { compare, generate, swap } from './utils';

export default function Intertion() {
  const nums = generate(20000);
  const original = nums.slice(0);

  console.time('原生排序');
  original.sort((a, b) => a - b);
  console.timeEnd('原生排序');

  console.time('插入排序');
  sort(nums);
  console.timeEnd('插入排序');

  compare(nums, original);
}

// Intertion();

/**
 * 
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
  // TODO
}
