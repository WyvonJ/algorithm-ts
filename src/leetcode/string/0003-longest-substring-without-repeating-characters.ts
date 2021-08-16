/**
 * 3. 无重复字符的最长子串
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
export default function LongestSubstringWithoutRepeatingCharacters() {
  console.log(lengthOfLongestSubstring('abcabcbb') === 3); // abc
  console.log(lengthOfLongestSubstring('bbbbb') === 1); // b
  console.log(lengthOfLongestSubstring('pwwkew') === 3); // kew
  console.log(lengthOfLongestSubstring('abba') === 2); // ab
}

// LongestSubstringWithoutRepeatingCharacters();

/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度
 * 滑动窗口 哈希表
 * 模式识别1: 一旦涉及出现次数, 就需要用到散列表, 构造子串, 散列表存下标
 * 模式识别2: 涉及子串, 考虑滑动窗口
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  const map: Record<string, number> = {};
  // 最大长度
  let max = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    // 如果已经存在map中, 注意存的是索引, 所以要用undefined判断
    if (map[s[i]] !== undefined) {
      // 移动左指针到
      left = Math.max(left, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - left + 1);
  }
  return max;
}
