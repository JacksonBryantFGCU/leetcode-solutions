// https://leetcode.com/problems/add-and-search-word-data-structure-design/

class TrieNode {
  children: Map<string, TrieNode>;
  isWord: boolean;

  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class WordDictionary {
  root: TrieNode = new TrieNode();

  addWord(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) node.children.set(char, new TrieNode());
      node = node.children.get(char)!;
    }
    node.isWord = true;
  }

  search(word: string): boolean {
    const dfs = (node: TrieNode, i: number): boolean => {
      if (i === word.length) return node.isWord;

      const char = word[i];
      if (char === ".") {
        for (const child of node.children.values()) {
          if (dfs(child, i + 1)) return true;
        }
        return false;
      }

      if (!node.children.has(char)) return false;
      return dfs(node.children.get(char)!, i + 1);
    };

    return dfs(this.root, 0);
  }
}
