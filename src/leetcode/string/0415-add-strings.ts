/**
 * 415. 字符串相加
 * https://leetcode-cn.com/problems/add-strings/
 */
export default function AddStrings() {
  console.log(addStrings('123456789', '987654321'))
  console.log(addStrings('8', '8'))
  console.log(addStrings('123', '32'))
}

AddStrings();

/**
 * 双指针
 * 注意几个点
 * @param {string} num1
 * @param {string} num2
 * @return {*}  {string}
 */
function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  // 下一次要加的数
  let carry = 0;
  // 所有的数字
  const strs: string[] = [];
  // IMPORTANT 一直循环到完成位置 
  while(i >= 0 || j >= 0) {
    // 将上一次的进位与当前所有数值加起来
    const num: number = (+num1[i] || 0) + (+num2[j] || 0) + carry;
    // 因为是加法, 所以只有可能进位1 注意判断等于10
    carry = num >= 10 ? 1 : 0;
    strs.push((num % 10).toString());
    i--;
    j--;
  }
  // IMPORTANT 如果最后还有进位的话要再加入 比如 8 + 9 => [7] 最后会留下 1 要变为17
  if (carry > 0) {
    strs.push(carry.toString())
  }
  // IMPORTANT 加的顺序是反的, 记得翻转过来
  return strs.reverse().join('');
}
