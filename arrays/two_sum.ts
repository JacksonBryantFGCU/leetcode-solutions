function twoSum(nums: number[], target: number): number[] {
  // Declare an empty hashmap to store the indices of the numbers
  const hashmap: Record<number, number> = {};
  // Iterate through the array of numbers
  // For each number, calculate the difference between the target and the current number
  // If the difference exists in the hashmap, return the indices of the two numbers
  // Otherwise, store the current number and its index in the hashmap
  // If no such pair is found, return an empty array
  // Time complexity: O(n)
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashmap.hasOwnProperty(diff)) {
      return [hashmap[diff], i];
    }
    hashmap[nums[i]] = i;
  }

  return [];
}
