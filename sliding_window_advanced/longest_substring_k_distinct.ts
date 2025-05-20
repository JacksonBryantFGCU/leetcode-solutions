// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  if (k === 0) return 0;

  const map = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.size > k) {
      const leftChar = s[left];
      map.set(leftChar, map.get(leftChar)! - 1);
      if (map.get(leftChar) === 0) map.delete(leftChar);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
