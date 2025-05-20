// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

class TreeNodeFlat {
  val: number;
  left: TreeNodeFlat | null = null;
  right: TreeNodeFlat | null = null;
  constructor(val?: number) {
    this.val = val ?? 0;
  }
}

function flatten(root: TreeNodeFlat | null): void {
  if (!root) return;

  flatten(root.left);
  flatten(root.right);

  const left = root.left;
  const right = root.right;

  root.left = null;
  root.right = left;

  let tail = root;
  while (tail.right) tail = tail.right;
  tail.right = right;
}