// https://leetcode.com/problems/course-schedule-ii/

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: Map<number, number[]> = new Map();
  const visited: number[] = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited
  const result: number[] = [];

  for (const [course, prereq] of prerequisites) {
    if (!graph.has(course)) graph.set(course, []);
    graph.get(course)!.push(prereq);
  }

  const dfs = (node: number): boolean => {
    if (visited[node] === 1) return false;
    if (visited[node] === 2) return true;

    visited[node] = 1;
    for (const neighbor of graph.get(node) || []) {
      if (!dfs(neighbor)) return false;
    }

    visited[node] = 2;
    result.push(node);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return result;
}
