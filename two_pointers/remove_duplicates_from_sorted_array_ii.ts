// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let insertIndex = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[insertIndex - 2]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return insertIndex;
}
