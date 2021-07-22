/**
 * 66. 加一
 * https://leetcode-cn.com/problems/plus-one/
 */
export default function PlusOne() {
  const digits = [9, 9, 9, 9, 9];
  console.log(plusOne(digits));
}

// PlusOne();

/**
 * 每位数字加一, 只需处理为9的进位即可
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    // 只要当前为9 则进位变0,只要下一位进一即可
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }
  digits.fill(0);
  digits.push(0);
  digits[0] = 1;
  return digits;
}
