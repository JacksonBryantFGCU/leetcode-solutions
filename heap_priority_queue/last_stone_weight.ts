// https://leetcode.com/problems/last-stone-weight/

function lastStoneWeight(stones: number[]): number {
  const maxHeap = [...stones].sort((a, b) => b - a);

  while (maxHeap.length > 1) {
    const first = maxHeap.shift()!;
    const second = maxHeap.shift()!;
    if (first !== second) {
      maxHeap.push(first - second);
      maxHeap.sort((a, b) => b - a);
    }
  }

  return maxHeap[0] ?? 0;
}
