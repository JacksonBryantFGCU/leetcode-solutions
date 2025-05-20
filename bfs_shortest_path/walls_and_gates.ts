// https://leetcode.com/problems/walls-and-gates/

function wallsAndGates(rooms: number[][]): void {
  const rows = rooms.length, cols = rooms[0].length;
  const queue: [number, number][] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rooms[r][c] === 0) queue.push([r, c]);
    }
  }

  const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

  while (queue.length) {
    const [r, c] = queue.shift()!;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (
        nr >= 0 && nc >= 0 && nr < rows && nc < cols &&
        rooms[nr][nc] === 2147483647
      ) {
        rooms[nr][nc] = rooms[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }
}
