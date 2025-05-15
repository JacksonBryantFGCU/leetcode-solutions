// https://leetcode.com/problems/number-of-islands/

function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const dfs = (r: number, c: number) => {
    if (
      r < 0 || c < 0 || 
      r >= rows || c >= cols || 
      grid[r][c] === '0'
    ) return;

    grid[r][c] = '0'; // mark visited

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}
