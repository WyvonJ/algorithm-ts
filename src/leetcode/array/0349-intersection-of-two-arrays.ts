/**
 * 349. 两个数组的交集
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */
export default function IntersectionOfTwoArrays() {}

IntersectionOfTwoArrays();

function intersection(nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) {
    return intersection(nums2, nums1);
  }
  const set = new Set();
  
  return [];
}
