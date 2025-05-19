// https://leetcode.com/problems/palindrome-partitioning/

function partition(s: string): string[][] {
  const res: string[][] = [];

  const isPalindrome = (str: string, l: number, r: number): boolean => {
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  const dfs = (start: number, path: string[]) => {
    if (start === s.length) {
      res.push([...path]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        path.push(s.slice(start, end + 1));
        dfs(end + 1, path);
        path.pop(); // backtrack
      }
    }
  };

  dfs(0, []);
  return res;
}
