import { compare, generate, swap, time } from './utils';

export default function Heap() {
  // const nums = generate(10);
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const original = nums.slice(0);
  const custom = nums.slice(0);
  const native = nums.slice(0);
  console.log(original);

  time('原生排序', () => {
    native.sort((a, b) => a - b);
  });
  time('堆排序', () => {
    sort(custom);
  });
  compare(custom, native);
}

// Heap();

/**
 * 堆排序
 * @param {number[]} nums
 */
function sort(nums: number[]) {
  buildMaxHeap(nums);
  let len = nums.length;
  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, 0, i);
    heapify(nums, 0, --len);
  }
}

/**
 * 建立大根堆
 * @param {number[]} nums
 */
function buildMaxHeap(nums: number[]) {
  // 从数组中点开始向前遍历
  for (let i = ~~(nums.length / 2); i >= 0; i--) {
    heapify(nums, i, nums.length);
  }
}

/**
 * 堆调整
 * @param {number[]} nums
 * @param {number} i
 */
function heapify(nums: number[], i: number, len: number) {
  // 第i个左子节点的索引
  const left = 2 * i + 1;
  // 第i个右子节点的索引 为右子节点加1
  const right = left + 1;
  // 最大的节点, 就是i
  let largest = i;
  // 如果左边比他大, 就交换 经过两次比较之后肯定i最大
  if (left < len && nums[left] > nums[largest]) {
    largest = left;
  }
  if (right < len && nums[right] > nums[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(nums, largest, i);
    // 对调转过来的新位置的元素再进行堆调整
    heapify(nums, largest, len);
  }
}
