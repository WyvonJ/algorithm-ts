import { compare, generate, swap, time } from './utils';

export default function Merge() {
  const nums = generate(100000);
  // const original = nums.slice(0);
  const custom = nums.slice(0);
  const native = nums.slice(0);

  time('原生排序', () => {
    native.sort((a, b) => a - b);
  });
  time('归并排序', () => {
    sort(custom);
  });
  compare(custom, native);
}

// Merge();

/**
 * 经典算法版本
 * @param {number[]} nums
 */
function sort(nums: number[]) {
  // 只定义一个temp 空间复杂度 O(N)
  const temp: number[] = new Array(nums.length);
  _sort(nums, 0, nums.length - 1, temp);
}

/**
 * 排序过程
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number[]} temp
 */
function _sort(nums: number[], left: number, right: number, temp: number[]) {
  if (left < right) {
    // 定义拆分点
    const mid = ~~((left + right) / 2);
    // 左右两边分别递归排序
    _sort(nums, left, mid, temp);
    _sort(nums, mid + 1, right, temp);
    // 将排序好的内容归并
    merge(nums, left, mid, right, temp);
  }
}

/**
 * 定义归并的过程
 * @param {number[]} nums
 * @param {number} left
 * @param {number} mid
 * @param {number} right
 * @param {number[]} temp
 */
function merge(nums: number[], left: number, mid: number, right: number, temp: number[]) {
  let l = left; // 0
  let r = mid + 1; // 

  // 这个ptr是用来将两个数组中的元素放到temp中去的
  // 注意left和right都是索引 所以是ptr <= right
  for (let ptr = left; ptr <= right; ptr++) {
    // 这里是四个完全竞态的条件, 所以不能直接用 || 合写
    // 否则会出现 r > right和nums[l] > nums[r] 同时成立 导致一次循环执行力两次赋值
    // 注意! 这里是错误写法❌
    // if (nums[l] <= nums[r] || r > right) {
    //   temp[ptr] = nums[l];
    //   l++;
    // } else if (nums[l] > nums[r] || l > mid) {
    //   temp[ptr] = nums[r];
    //   r++;
    // }
    // 根据情况将较小的值放到temp中去
    if (r > right) {
      temp[ptr] = nums[l];
      l++;
    } else if (l > mid) {
      temp[ptr] = nums[r];
      r++;
    } else if (nums[l] <= nums[r]) {
      temp[ptr] = nums[l];
      l++;
    } else if (nums[l] > nums[r]) {
      temp[ptr] = nums[r];
      r++;
    }
  }
  // 将元素放回原数组
  for (let ptr = left; ptr <= right; ptr++) {
    nums[ptr] = temp[ptr];
  }
}

/**
 * 归并
 * 非原地排序 空间复杂度较高
 * @param {number[]} nums
 */
function sort1(nums: number[]): number[] {
  // 基线条件
  if (nums.length <= 2) {
    if (nums[0] > nums[1]) {
      swap(nums, 0, 1);
    }
    return nums;
  }
  // 划分区位置 取整
  let partition = ~~(nums.length / 2);
  const tempArr: number[] = new Array(nums.length);

  // 两次归并操作
  const leftArr = arguments.callee(nums.slice(0, partition));
  const rightArr = arguments.callee(nums.slice(partition, nums.length));
  // 定义两个指针
  let left = 0;
  let right = 0;
  // 归并操作
  for (let i = 0; i < nums.length; i++) {
    if ((leftArr[left] !== undefined && rightArr[right] === undefined) || leftArr[left] <= rightArr[right]) {
      // !!! 注意这里 两者相等应该取左边的, 否则算法变为不稳定排序
      tempArr[i] = leftArr[left];
      left++;
    } else if ((leftArr[left] === undefined && rightArr[right] !== undefined) || leftArr[left] > rightArr[right]) {
      tempArr[i] = rightArr[right];
      right++;
    }
  }
  return tempArr;
}
