function reverseStr(s: string, k: number): string {
  let left = 0;
  let right = k - 1;
  const strList = s.split('');
  const mod = s.length % k;
  // 是否要进行最后一次交换
  const flag = mod >= k && mod < 2 * k;
  const div = Math.ceil(s.length / (2 * k));
  for (let i = 2 * k - 1; i < div * 2 * k; i += 2 * k) {
    if (!flag && i > s.length) {
      break;
    }
    while (left < right) {
      const temp = strList[left];
      strList[left] = strList[right];
      strList[right] = temp;
      left++;
      right--;
    }
    left = i;
    right = i + k;
  }
  return strList.join('');
}

const r = reverseStr('abcdefg', 2);
console.log(r);
