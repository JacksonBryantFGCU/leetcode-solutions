// https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 1;
      let current = num;
      while (numSet.has(current + 1)) {
        current++;
        length++;
      }
      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}
