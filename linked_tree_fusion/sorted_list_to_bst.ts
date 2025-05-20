// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

class LLNode {
  val: number;
  next: LLNode | null;
  constructor(val?: number, next?: LLNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

class BSTNode {
  val: number;
  left: BSTNode | null = null;
  right: BSTNode | null = null;
  constructor(val?: number) {
    this.val = val ?? 0;
  }
}

function sortedListToBST(head: LLNode | null): BSTNode | null {
  if (!head) return null;

  const findMid = (head: LLNode | null): [LLNode | null, LLNode | null] => {
    let prev: LLNode | null = null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      prev = slow;
      slow = slow!.next!;
      fast = fast.next.next;
    }
    if (prev) prev.next = null; // cut list
    return [slow, prev === null ? null : head];
  };

  const [mid, leftHead] = findMid(head);
  const node = new BSTNode(mid!.val);
  node.left = sortedListToBST(leftHead);
  node.right = sortedListToBST(mid!.next);
  return node;
}
