// https://leetcode.com/problems/replace-words/

class TrieNode {
  children: Map<string, TrieNode>;
  isWord: boolean;

  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) node.children.set(char, new TrieNode());
      node = node.children.get(char)!;
    }
    node.isWord = true;
  }

  findPrefix(word: string): string {
    let node = this.root;
    let prefix = "";
    for (const char of word) {
      if (!node.children.has(char)) return word;
      prefix += char;
      node = node.children.get(char)!;
      if (node.isWord) return prefix;
    }
    return word;
  }
}

function replaceWords(dictionary: string[], sentence: string): string {
  const trie = new Trie();
  for (const word of dictionary) trie.insert(word);

  return sentence
    .split(" ")
    .map((word) => trie.findPrefix(word))
    .join(" ");
}
