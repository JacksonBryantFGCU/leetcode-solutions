# Sliding Window Pattern

The sliding window pattern is used to solve problems involving **contiguous subarrays or substrings**. It allows for efficient traversal of a sequence by maintaining a dynamic window that expands and shrinks based on constraints.

---

## 🧠 Common Use Cases

- Longest/shortest subarray problems
- Substring matching
- Frequency counting within a window
- Tracking sums or averages over time

---

## 🔧 Strategy

- Use two pointers: `left` and `right`
- Expand `right` to grow the window
- Shrink `left` when constraints are broken
- Track state: count, sum, set, or map inside the window

---

## ✅ Problems Covered

| Problem | Difficulty | Link |
|--------|------------|------|
| Max Consecutive Ones III | Medium | [LeetCode #1004](https://leetcode.com/problems/max-consecutive-ones-iii/) |
| Permutation in String | Medium | [LeetCode #567](https://leetcode.com/problems/permutation-in-string/) |
