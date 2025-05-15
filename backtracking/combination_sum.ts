// https://leetcode.com/problems/combination-sum/

function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const dfs = (i: number, total: number, path: number[]) => {
    if (total === target) {
      res.push([...path]);
      return;
    }
    if (i === candidates.length || total > target) return;

    // Include current
    path.push(candidates[i]);
    dfs(i, total + candidates[i], path);
    path.pop(); // backtrack

    // Exclude current
    dfs(i + 1, total, path);
  };

  dfs(0, 0, []);
  return res;
}
