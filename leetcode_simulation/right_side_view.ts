// https://leetcode.com/problems/binary-tree-right-side-view/

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(val?: number) {
    this.val = val ?? 0;
  }
}

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  const res: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if (i === size - 1) res.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
}
