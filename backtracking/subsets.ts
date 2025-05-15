// https://leetcode.com/problems/subsets/

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];

  const dfs = (i: number, path: number[]) => {
    if (i === nums.length) {
      res.push([...path]);
      return;
    }

    dfs(i + 1, path); // exclude
    path.push(nums[i]); // include
    dfs(i + 1, path);
    path.pop(); // backtrack
  };

  dfs(0, []);
  return res;
}
