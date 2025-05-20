// https://leetcode.com/problems/linked-list-in-binary-tree/

class LLNodeCheck {
  val: number;
  next: LLNodeCheck | null;
  constructor(val?: number, next?: LLNodeCheck | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

class TreeNodeCheck {
  val: number;
  left: TreeNodeCheck | null = null;
  right: TreeNodeCheck | null = null;
  constructor(val?: number) {
    this.val = val ?? 0;
  }
}

function isSubPath(head: LLNodeCheck | null, root: TreeNodeCheck | null): boolean {
  if (!root) return false;
  if (dfs(root, head)) return true;
  return isSubPath(head, root.left) || isSubPath(head, root.right);

  function dfs(node: TreeNodeCheck | null, list: LLNodeCheck | null): boolean {
    if (!list) return true;
    if (!node || node.val !== list.val) return false;
    return dfs(node.left, list.next) || dfs(node.right, list.next);
  }
}
