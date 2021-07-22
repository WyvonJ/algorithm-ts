/**
 * 283. 移动零
 * https://leetcode-cn.com/problems/move-zeroes/
 */
export default function MoveZeroes() {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums)
  console.log(nums);
}

// MoveZeroes();

/**
 * 双指针, 比较相邻两个数, 为[0, 1]的结构则进行交换
 * @param {number[]} nums
 */
function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) {
    return;
  }
  // 
  let i = 0;
  let j = 1;
  while (i < nums.length && j < nums.length) {
    // 只有存在 [0, 1] 的情况才交换
    if (nums[i] === 0 && nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
    // 遇到[0, 0] [1, 0]则直接将指针往后移
    if ((nums[i] !== 0 && nums[j] !== 0) || (nums[i] !== 0 && nums[j] === 0)) {
      i++;
    }
    // 右指针默认移动
    j++;
  }
}
