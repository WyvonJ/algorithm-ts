/**
 * 217. 存在重复元素
 * https://leetcode-cn.com/problems/contains-duplicate/
 */
 export default function ContainsDuplicate() {
  const nums = [4, 2, 6, 7, 8, 3, 2];
  console.log(containsDuplicate(nums));
  console.log(containsDuplicate2(nums));
  console.log(containsDuplicate3(nums));
}

// ContainsDuplicate();

/**
 * 利用HashMap存储已存在的key
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums: number[]): boolean {
  const map: any = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = true;
    }
  }
  return false;
}

/**
 * 利用Set去重
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate2(nums: number[]): boolean {
  return nums.length !== new Set(nums).size;
}

/**
 * 排序后两两比较
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate3(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}
