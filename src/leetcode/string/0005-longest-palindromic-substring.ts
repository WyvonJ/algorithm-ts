/**
 * 5. 最长回文子串
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 */
export default function LongestPalindromicSubstring() {
  console.log(longestPalindrome('babad') === 'bab');
  console.log(longestPalindrome('cbbd') === 'bb');
  console.log(longestPalindrome('a') === 'a');
  console.log(longestPalindrome('ac') === 'a');
}

// LongestPalindromicSubstring();

/**
 * 动态规划, 已知 aba为回文串, 那么cabac也为回文串
 * @param {string} s
 * @return {number}  {number}
 */
function longestPalindrome(s: string): string {

  return '';
}
