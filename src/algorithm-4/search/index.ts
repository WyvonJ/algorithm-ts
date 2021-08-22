const a = [1, 2, 2, 3];
const b = [1, 3, 3, 5];
// 两个数组中不重复的元素
// 2 4 5
function getUnrepeated(arr1: number[], arr2: number[]): number[] {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  for (let item of set2) {
    if (set1.has(item)) {
      set1.delete(item);
    } else {
      set1.add(item);
    }
  }
  return [...set1];
}

console.log(getUnrepeated(a, b));
