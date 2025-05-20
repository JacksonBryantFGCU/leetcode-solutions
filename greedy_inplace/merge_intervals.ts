// https://leetcode.com/problems/merge-intervals/

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];

  for (const [start, end] of intervals) {
    if (!res.length || res[res.length - 1][1] < start) {
      res.push([start, end]);
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], end);
    }
  }

  return res;
}
