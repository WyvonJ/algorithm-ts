import { compare, generate, swap } from './utils';
/**
 * 希尔排序
 * 改进的插入排序
 * @export
 */
export default function Shell() {
  const original = generate(60000);
  const custom = original.slice(0);
  const native = original.slice(0);

  console.time('原生排序');
  native.sort((a, b) => a - b);
  console.timeEnd('原生排序');

  console.time('希尔排序');
  sort(custom);
  console.timeEnd('希尔排序');

  compare(custom, native);
}

// Shell();

/**
 * 希尔排序
 * @param {number[]} nums
 */
function sort(nums: number[]) {
  let h = 1;
  let len = nums.length;
  // Knuth计算h 效率较高 注意取整, 直接舍掉小数部分
  while (h < len / 3) {
    h = ~~(h * 3 + 1);
  }

  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && nums[j] < nums[j - h]; j -= h) {
        swap(nums, j, j - h);
      }
    }
    h = ~~(h / 3);
  }
}
