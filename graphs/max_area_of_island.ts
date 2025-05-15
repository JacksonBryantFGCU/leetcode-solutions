// https://leetcode.com/problems/max-area-of-island/

function maxAreaOfIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  const dfs = (r: number, c: number): number => {
    if (
      r < 0 || c < 0 ||
      r >= rows || c >= cols ||
      grid[r][c] === 0
    ) return 0;

    grid[r][c] = 0;
    return (
      1 +
      dfs(r + 1, c) +
      dfs(r - 1, c) +
      dfs(r, c + 1) +
      dfs(r, c - 1)
    );
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }

  return maxArea;
}
