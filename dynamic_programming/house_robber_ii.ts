// https://leetcode.com/problems/house-robber-ii/

function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  const robLinear = (arr: number[]): number => {
    let prev1 = 0, prev2 = 0;
    for (const num of arr) {
      const temp = prev1;
      prev1 = Math.max(prev2 + num, prev1);
      prev2 = temp;
    }
    return prev1;
  };

  // Compare: exclude first house vs exclude last
  return Math.max(
    robLinear(nums.slice(0, nums.length - 1)),
    robLinear(nums.slice(1))
  );
}
