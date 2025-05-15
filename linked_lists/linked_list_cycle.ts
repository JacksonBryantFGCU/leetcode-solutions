// https://leetcode.com/problems/linked-list-cycle/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next!;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
