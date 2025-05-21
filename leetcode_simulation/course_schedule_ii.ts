// https://leetcode.com/problems/course-schedule-ii/

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = new Map<number, number[]>();
  const indegree = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) graph.set(prereq, []);
    graph.get(prereq)!.push(course);
    indegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const result: number[] = [];
  while (queue.length) {
    const node = queue.shift()!;
    result.push(node);
    for (const neighbor of graph.get(node) || []) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return result.length === numCourses ? result : [];
}
