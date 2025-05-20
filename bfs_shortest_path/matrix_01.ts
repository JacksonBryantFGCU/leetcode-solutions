// https://leetcode.com/problems/01-matrix/

function updateMatrix(mat: number[][]): number[][] {
  const rows = mat.length, cols = mat[0].length;
  const queue: [number, number][] = [];
  const res = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) =>
      mat[i][j] === 0 ? 0 : Infinity
    )
  );

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) queue.push([r, c]);
    }
  }

  const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

  while (queue.length) {
    const [r, c] = queue.shift()!;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (
        nr >= 0 && nc >= 0 && nr < rows && nc < cols &&
        res[nr][nc] > res[r][c] + 1
      ) {
        res[nr][nc] = res[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return res;
}
