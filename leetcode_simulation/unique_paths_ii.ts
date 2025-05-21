// https://leetcode.com/problems/unique-paths-ii/

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;

  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (obstacleGrid[r][c] === 1) {
        dp[r][c] = 0;
      } else if (r === 0 && c === 0) {
        dp[r][c] = 1;
      } else {
        const up = r > 0 ? dp[r - 1][c] : 0;
        const left = c > 0 ? dp[r][c - 1] : 0;
        dp[r][c] = up + left;
      }
    }
  }

  return dp[rows - 1][cols - 1];
}
