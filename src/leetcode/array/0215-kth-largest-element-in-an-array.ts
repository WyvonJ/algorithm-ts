/**
 * 215. 数组中的第K个最大元素
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */
export default function KthLargestElementInAnArray() {
  console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
  console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
  console.log(findKthLargest1([3,2,1,5,6,4], 2)); // 5
  console.log(findKthLargest1([3,2,3,1,2,4,5,5,6], 4)); // 4
}

// KthLargestElementInAnArray();


/**
 * 投机取巧版本
 * @param {number[]} nums
 * @param {number} k
 * @return {*}  {number}
 */
function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};

/**
 * 硬核版本1
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {*}  {number}
 */
function findKthLargest1(nums: number[], k: number): number {
  return 0;
};
