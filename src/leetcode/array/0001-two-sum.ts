/**
 * 1. 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 */
export default function TwoSum() {
  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
}

// TwoSum();

/**
 * 哈希表
 * 思路在于用哈希表存住索引, 而key又刚好用 target - n来表示
 * 所以只要在后面的遍历中遇到n === key的就说明是满足的, 此时返回索引即可
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
  // 弄一个map存
  const map: any = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map[n] !== undefined) {
      // 如果现有的map中有这个数, 则直接返回对应索引
      return [map[n], i];
    } else if (map[target - n] === undefined) {
      // 如果没有存这个数的话就以差值为key, 索引为value存上
      map[target - n] = i;
    }
  }
  return [];
}

