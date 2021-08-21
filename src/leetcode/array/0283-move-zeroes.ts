/**
 * 283. 移动零
 * https://leetcode-cn.com/problems/move-zeroes/
 */
export default function MoveZeroes() {
  const nums = [0, 1, 0, 3, 12];
  // [1, 3, 12, 0, 0]
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
  let i = 0;
  let j = 1;
  while (i < nums.length && j < nums.length) {
    // 只有存在 [0, 1] 的情况才交换
    if (nums[i] === 0 && nums[j] !== 0) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
    // 遇到[0, 0] [1, 0]则直接将指针往后移
    if (!(nums[i] === 0 && nums[j] === 0)) {
      i++
    }
    // 右指针默认移动
    j++;
  }
}

/**
 * nums[i]和nums[i]分别有四种情况可能出现
 * 可以看到只有第三种情况才需要交换, 满足[0, 1]
 * j默认后移, 所以要判断i什么时候移动, 可想而知当[i]指向了非零数字的时候需要后移
 * 因此一种情况就是交换后i移动, 另一种情况就是除了两者都为0, 此时只要满足非1的情况下移动i
 * 1. nums[i] == 0 && nums[j] == 0
 * 2. nums[i] != 0 && nums[j] != 0
 * 
 * 3. nums[i] == 0 && nums[j] != 0 交换
 * 4. nums[i] != 0 && nums[j] == 0
 */