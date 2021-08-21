import { compare, generate, swap, time } from './utils';

export default function Quick() {
  const nums = generate(100000);
  // const nums = [94, 6, 65, 93, 1, 84, 79, 79, 82, 72]
  // const original = nums.slice(0);
  const custom = nums.slice(0);
  const native = nums.slice(0);

  time('原生排序', () => {
    native.sort((a, b) => a - b);
    
  });
  time('快速排序', () => {
    sort(custom);
  });
  compare(custom, native);
}

// Quick();


/**
 * 实现快排的基本骨架
 * @param {number[]} nums
 */
function sort1(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  let pivot = nums[0];
  const less = [];
  const greater = [];
  // !!! 注意这里i从1开始, 为了屏蔽掉pivot
  // 因为有可能出现 [12, 6, 7, 3, 1]这种数组
  // 第一位比所有的都大, 导致过滤出来的greater永远等于原数组
  // 陷入无限循环
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= pivot) {
      greater.push(nums[i]);
    } else {
      less.push(nums[i]);
    }
  }
  return sort1(less).concat([pivot]).concat(sort1(greater));
}

/**
 * 原地的快速排序
 * @param {number[]} nums
 */
function sort(nums: number[]): void {
  _sort(nums, 0, nums.length - 1);
}

/**
 * 快排过程
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {*}
 */
function _sort(nums: number[], left: number, right: number) {
  // 基线条件
  if (right <= left) return;
  // 返回中间轴, 用于下次排序切分
  const mid = partition(nums, left, right);
  _sort(nums, left, mid - 1);
  _sort(nums, mid + 1, right);
}

/**
 * 切分
 * 1. 对于某个j a[j]已经排定
 * 2. a[left]到a[j-1]的所有元素都不大于a[j]
 * 2. a[j+1]到a[right]的所有元素都不大于a[j]
 *
 * 双指针左右 给定一个划分元素 以其为界 划分两边
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function partition(nums: number[], left: number, right: number): number {
  let pivot = nums[right];
  //     [5, 3, 2, 4, 9, 8, 7, 1, 6]; 以6为基准点
  // l指向5↑               r指向1↑
  // 将比小于等于6的放左边 大于6的放右边
  // 思路为 l找到一个大于6的, r找到一个小于等于6的
  // 两边进行一次交换
  // 第一次
  //     [5, 3, 2, 4, 9, 8, 7, 1, 6]; 交换l r
  //               l=4↑      r=7↑
  //     [5, 3, 2, 4, 1,    8,   7, 9, 6]; 此时两边都比6大
  //               r=4↑  l=5↑ 
  let l = left;
  let r = right - 1;
  while (l <= r) {
    while (nums[l] <= pivot && l <= r) {
      l++;
    }
    while (nums[r] > pivot && l <= r) {
      r--;
    }
    if (l < r) {
      swap(nums, l, r);
    }
  }
  // 最后将pivot的位置right 与剩下的数交换, 则这个l的位置为下一次的循环中点
  swap(nums, l, right);
  return l;
}
