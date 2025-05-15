// BFS version of Number of Islands

function numIslandsBFS(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const bfs = (r: number, c: number) => {
    const queue: [number, number][] = [[r, c]];
    grid[r][c] = '0';

    while (queue.length) {
      const [x, y] = queue.shift()!;
      for (const [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 && ny >= 0 && 
          nx < rows && ny < cols && 
          grid[nx][ny] === '1'
        ) {
          grid[nx][ny] = '0';
          queue.push([nx, ny]);
        }
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        bfs(r, c);
      }
    }
  }

  return count;
}
