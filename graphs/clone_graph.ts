// https://leetcode.com/problems/clone-graph/

class Node {
  val: number;
  neighbors: Node[];

  constructor(val?: number, neighbors?: Node[]) {
    this.val = val ?? 0;
    this.neighbors = neighbors ?? [];
  }
}

function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;

  const visited = new Map<Node, Node>();

  const dfs = (n: Node): Node => {
    if (visited.has(n)) return visited.get(n)!;

    const clone = new Node(n.val);
    visited.set(n, clone);

    for (const neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
}
