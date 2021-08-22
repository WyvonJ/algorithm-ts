import { generate } from '../../algorithm-4/sorting/utils';

/**
 * 704. 二分查找
 * https://leetcode-cn.com/problems/binary-search/
 */
export default function BinarySearch() {
  const nums = [28, 28, 44, 45, 50, 52, 55, 58, 67, 75, 106, 110, 110, 112, 133, 165, 170, 180, 186, 198];
  // console.log(search(nums, 133));
}

BinarySearch();

/**
 * 二分法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length - 1;
  // 只要没有相遇
  while (lo <= hi) {
    // 注意取整, 注意溢出
    const mid = ~~((hi - lo) / 2 + lo);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      // hi每次往前移动一位
      hi = mid - 1;
    } else {
      // lo每次往后移动一位
      lo = mid + 1;
    }
  }
  return -1;
}
