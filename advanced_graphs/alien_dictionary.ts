// https://leetcode.com/problems/alien-dictionary/

function alienOrder(words: string[]): string {
  const graph = new Map<string, Set<string>>();
  const indegree = new Map<string, number>();

  for (const word of words) {
    for (const char of word) {
      graph.set(char, new Set());
      indegree.set(char, 0);
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const [w1, w2] = [words[i], words[i + 1]];
    if (w1.length > w2.length && w1.startsWith(w2)) return "";

    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      if (w1[j] !== w2[j]) {
        if (!graph.get(w1[j])!.has(w2[j])) {
          graph.get(w1[j])!.add(w2[j]);
          indegree.set(w2[j], indegree.get(w2[j])! + 1);
        }
        break;
      }
    }
  }

  const queue = [...[...indegree.keys()].filter((c) => indegree.get(c) === 0)];
  let res = "";

  while (queue.length) {
    const char = queue.shift()!;
    res += char;

    for (const nei of graph.get(char)!) {
      indegree.set(nei, indegree.get(nei)! - 1);
      if (indegree.get(nei) === 0) queue.push(nei);
    }
  }

  return res.length === indegree.size ? res : "";
}
