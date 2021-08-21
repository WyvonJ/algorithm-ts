import { compare, generate, swap } from './utils';

export default function Shell() {
  const nums = generate(20000);
  const original = nums.slice(0);

  console.time('原生排序');
  original.sort((a, b) => a - b);
  console.timeEnd('原生排序');

  console.time('插入排序');
  sort(nums);
  console.timeEnd('插入排序');

  compare(nums, original);
}

// Shell();

/**
 * 
 * @param {number[]} nums
 */
function sort(nums: number[]) {

}
