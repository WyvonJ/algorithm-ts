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
  _sort(nums, 0, nums.length - 1, temp); // 排序入口
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
    // 定义拆分点 注意取整
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
  let l = left; // 左指针从 0 到 mid
  let r = mid + 1; // 右指针从 mid+1 到 right
  // 这个i是用来将两个数组中的元素放到temp中去的
  // 注意left和right都是索引 i <= right
  for (let i = left; i <= right; i++) {
    if (r > right) {
      temp[i] = nums[++l];
    } else if (l > mid) {
      temp[i] = nums[++r];
    } else if (nums[l] <= nums[r]) {
      temp[i] = nums[++l];
    } else if (nums[l] > nums[r]) {
      temp[i] = nums[++r];
    }
  }
  // 将元素放回原数组
  for (let i = left; i <= right; i++) {
    nums[i] = temp[i];
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
