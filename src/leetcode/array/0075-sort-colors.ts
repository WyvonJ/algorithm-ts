/**
 * 75. 颜色分类
 * https://leetcode-cn.com/problems/sort-colors/
 */
export default function SortColors() {
  const arr = [2, 0, 2, 1, 1, 0];
  sortColors(arr);
  console.log(arr);
}

// SortColors();

function sortColors(nums: number[]): void {
  if (nums.length <= 1) {
    return;
  }
  let i = 0;
  let j = nums.length - 1;

}

function swap(nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
