/**
 * 88. 合并两个有序数组
 * https://leetcode-cn.com/problems/merge-sorted-array/
 */
export default function MergeSortedArray() {
  const nums1 = [4, 0, 0, 0, 0, 0],
    m = 1,
    nums2 = [1, 2, 3, 5, 6],
    n = 5;
  merge(nums1, m, nums2, n);
  console.log(nums1); // [1,2,2,3,5,6]
}

// MergeSortedArray();

/**
 Do not return anything, modify nums1 in-place instead.
 */

/**
 * 双指针移动
 * 思路的重点一个是从后往前确定两组中该用哪个数字
 * 另一个是结束条件以第二个数组全都插入进去为止
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  // 用来指示是不是所有值都移动完了
  let k = m + n - 1;
  // 另一个是结束条件以第二个数组全都插入进去为止
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}
