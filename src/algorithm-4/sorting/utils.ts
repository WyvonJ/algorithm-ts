export function generate(length: number = 10000): number[] {
  const arr: number[] = Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * length * 10);
  }
  return arr;
}

export function compare(arr1: number[], arr2: number[]): void {
  let flag = true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      flag = false
      break;
    }
  }
  console.log('排序' + (flag ? '成功 ✅' : '失败 ❌'))
}

export function swap(nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

export function time(msg: string, cb: Function) {
  // 使用performance api可以监控到毫秒的小数级别
  const start = performance.now();
  cb();
  const end = performance.now();
  console.log(`${msg}执行耗时: ${(end - start).toFixed(2)}ms`);
}

export class Comparable {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
}

export default {
  generate,
  compare,
  swap,
  time,
};
