function twoSum(nums: number[], target: number): number[] {
  const hashmap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashmap.hasOwnProperty(diff)) {
      return [hashmap[diff], i];
    }
    hashmap[nums[i]] = i;
  }

  return [];
