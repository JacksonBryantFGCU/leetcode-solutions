// https://leetcode.com/problems/house-robber/

function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let prev1 = 0; // i - 1
  let prev2 = 0; // i - 2

  for (const num of nums) {
    const temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }

  return prev1;
}
