// https://leetcode.com/problems/shortest-path-in-binary-matrix/

function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1;

  const dirs = [
    [0, 1], [1, 0], [1, 1],
    [-1, 0], [0, -1], [-1, -1],
    [-1, 1], [1, -1],
  ];

  const queue: [number, number, number][] = [[0, 0, 1]];
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    const [r, c, dist] = queue.shift()!;
    if (r === n - 1 && c === n - 1) return dist;

    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (
        nr >= 0 && nc >= 0 && nr < n && nc < n &&
        grid[nr][nc] === 0 && !visited[nr][nc]
      ) {
        visited[nr][nc] = true;
        queue.push([nr, nc, dist + 1]);
      }
    }
  }

  return -1;
}
