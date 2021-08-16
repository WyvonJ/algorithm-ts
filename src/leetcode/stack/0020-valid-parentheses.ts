/**
 * 20. 有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 */
export default function ValidParentheses() {
  console.log(isValid('()'));
  console.log(isValid('()[]{}'));
  console.log(isValid('(]'));
  console.log(isValid('([)]'));
  console.log(isValid('{[]}'));
  console.log(isValid('(('));
}

// ValidParentheses();


/**
 * 是否有效
 * @param {string} s
 * @return {boolean} 
 */
function isValid(s: string): boolean {
  const len = s.length;
  if (len % 2 !== 0) {
    return false;
  }
  const stack: string[] = [];
  const left = '([{';
  const map: any = {
    ']': '[',
    '}': '{',
    ')': '('
  };
  for (let i = 0; i < len; i++) {
    if (left.indexOf(s[i]) !== -1) {
      stack.push(s[i]);
    } else if (stack.pop() !== map[s[i]]) {
      return false;
    }
  }
  // 一定要栈里面没有其他元素了, 因为可能最后剩下来偶数个左括号
  return stack.length === 0;
};
