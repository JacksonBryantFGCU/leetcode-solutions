// https://leetcode.com/problems/sliding-window-maximum/

function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = []; // stores indices
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove indexes of elements not in current window
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove from back if current element is greater
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Add the front of deque to result once the window is full
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
