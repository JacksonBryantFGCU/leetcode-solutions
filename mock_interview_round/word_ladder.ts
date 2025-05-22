// https://leetcode.com/problems/word-ladder/

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue: [string, number][] = [[beginWord, 1]];

  while (queue.length) {
    const [word, length] = queue.shift()!;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const next =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (next === endWord) return length + 1;
        if (wordSet.has(next)) {
          queue.push([next, length + 1]);
          wordSet.delete(next);
        }
      }
    }
  }

  return 0;
}
