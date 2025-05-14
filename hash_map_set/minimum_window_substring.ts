// https://leetcode.com/problems/minimum-window-substring/

function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";

  const tMap = new Map<string, number>();
  for (const c of t) {
    tMap.set(c, (tMap.get(c) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let needed = t.length;
  let minLen = Infinity;
  let start = 0;

  while (right < s.length) {
    const char = s[right];
    if (tMap.has(char)) {
      if (tMap.get(char)! > 0) needed--;
      tMap.set(char, tMap.get(char)! - 1);
    }
    right++;

    while (needed === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        start = left;
      }

      const leftChar = s[left];
      if (tMap.has(leftChar)) {
        tMap.set(leftChar, tMap.get(leftChar)! + 1);
        if (tMap.get(leftChar)! > 0) needed++;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.slice(start, start + minLen);
}
