import { compare, generate } from './utils';

export default function Selection() {
  const nums = generate(20000);
  const copy1 = nums.slice(0);
  const copy2 = nums.slice(0);

  console.time('原生排序')
  copy2.sort((a, b) => a - b);
  console.timeEnd('原生排序')

  console.time('选择排序')
  sort(nums);
  console.timeEnd('选择排序')

  console.time('选择排序:优化版本')
  sort1(copy1);
  console.timeEnd('选择排序:优化版本')

  const result = compare(nums, copy2);
  console.log(result);
}

// Selection();

/**
 * 基础版本, 先考虑内循环, 每次选择一个最小的数, 与前面进行交换
 * @param {number[]} arr
 */
function sort(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minPos = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minPos]) {
        minPos = j;
      }
    }
    const temp = nums[i];
    nums[i] = nums[minPos];
    nums[minPos] = temp;
  }
}

/**
 * 优化版本1 每次内循环找出最大值和最小值, 分别放到最左和最右边去
 * @param {number[]} nums
 */
function sort1(nums: number[]) {
  for (let left = 0, right = nums.length - 1; left < right; left++, right--) {
    let minPos = left;
    let maxPos = right;
    for (let j = left; j <= right; j++) {
      if (nums[j] < nums[minPos]) {
        minPos = j;
      }
      if (nums[j] > nums[maxPos]) {
        maxPos = j;
      }
    }
    swap(nums, right, maxPos);
    // 这里需要考虑修正情况 最大值在最小值位置 最小值在最大值位置
    if (minPos === right) {
      minPos = maxPos;
    }
    swap(nums, left, minPos);
  }
}
// ---- 双层循环题目思路 先写内层循环

function swap(nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
