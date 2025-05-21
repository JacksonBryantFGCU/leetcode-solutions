// https://leetcode.com/problems/network-delay-time/

function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph = new Map<number, [number, number][]>();

  for (const [u, v, w] of times) {
    if (!graph.has(u)) graph.set(u, []);
    graph.get(u)!.push([v, w]);
  }

  const minHeap: [number, number][] = [[0, k]]; // [time, node]
  const dist = new Map<number, number>();

  while (minHeap.length) {
    minHeap.sort((a, b) => a[0] - b[0]);
    const [time, node] = minHeap.shift()!;
    if (dist.has(node)) continue;
    dist.set(node, time);

    for (const [neighbor, weight] of graph.get(node) || []) {
      if (!dist.has(neighbor)) {
        minHeap.push([time + weight, neighbor]);
      }
    }
  }

  return dist.size === n ? Math.max(...dist.values()) : -1;
}
