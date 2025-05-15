// https://leetcode.com/problems/implement-queue-using-stacks/

class MyQueue {
  private input: number[] = [];
  private output: number[] = [];

  push(x: number): void {
    this.input.push(x);
  }

  pop(): number {
    if (this.output.length === 0) {
      while (this.input.length) {
        this.output.push(this.input.pop()!);
      }
    }
    return this.output.pop()!;
  }

  peek(): number {
    if (this.output.length === 0) {
      while (this.input.length) {
        this.output.push(this.input.pop()!);
      }
    }
    return this.output[this.output.length - 1];
  }

  empty(): boolean {
    return this.input.length === 0 && this.output.length === 0;
  }
}
