// https://leetcode.com/problems/permutation-in-string/

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Map = new Array(26).fill(0);
  const s2Map = new Array(26).fill(0);
  const aCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    s1Map[s1.charCodeAt(i) - aCode]++;
    s2Map[s2.charCodeAt(i) - aCode]++;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (s1Map.join() === s2Map.join()) return true;

    s2Map[s2.charCodeAt(i + s1.length) - aCode]++;
    s2Map[s2.charCodeAt(i) - aCode]--;
  }

  return s1Map.join() === s2Map.join();
}
