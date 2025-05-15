// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let i = 0; i < n; i++) {
    if (fast) fast = fast.next;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow!.next;
  }

  if (slow && slow.next) {
    slow.next = slow.next.next;
  }

  return dummy.next;
}
