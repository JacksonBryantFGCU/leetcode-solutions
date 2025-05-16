# Trie / Prefix Tree Patterns

Tries are tree-based structures used for efficient prefix matching, autocomplete, and dictionary-based lookups.

---

## 🧠 Core Techniques

- Insert: character-by-character node creation
- Search: follow characters from root to leaf
- Wildcard search: DFS at each node (e.g. for `.matches`)
- Prefix queries: return early if prefix path is blocked

---

## ✅ Problems Covered

| Problem | Difficulty | Link |
|--------|------------|------|
| Implement Trie | Medium | [LeetCode #208](https://leetcode.com/problems/implement-trie-prefix-tree/) |
| Replace Words | Medium | [LeetCode #648](https://leetcode.com/problems/replace-words/) |
| Add and Search Word | Medium | [LeetCode #211](https://leetcode.com/problems/add-and-search-word-data-structure-design/) |
