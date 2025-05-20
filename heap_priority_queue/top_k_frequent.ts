// https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const heap = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
  return heap.slice(0, k).map(([num]) => num);
}
