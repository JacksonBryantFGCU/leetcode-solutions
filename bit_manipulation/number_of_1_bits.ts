// https://leetcode.com/problems/number-of-1-bits/

function hammingWeight(n: number): number {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n >>>= 1; // Unsigned right shift
  }
  return count;
}
