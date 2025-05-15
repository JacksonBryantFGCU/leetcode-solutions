// https://leetcode.com/problems/number-of-recent-calls/

class RecentCounter {
  private queue: number[] = [];

  ping(t: number): number {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}
