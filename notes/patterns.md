# LeetCode Patterns & Notes

This file tracks common problem-solving patterns and examples to build long-term intuition.

---

## 🧠 Two Pointers

**When to use:**  
- Problems involving arrays or strings where you’re looking for subarrays, pairs, or conditions that can be met by scanning from both ends or sides

**Core idea:**  
- Use two pointers (`left`, `right`) to shrink/expand range
- Often used in sorted arrays or palindromes

**Common Types:**
- Moving inward (`left++, right--`)
- Fast/slow pointer (detect cycles, etc.)

**Problems:**
1. ✅ [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) – Easy  
2. ✅ [3Sum](https://leetcode.com/problems/3sum/) – Medium  
3. ✅ [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) – Medium  
4. ✅ [Remove Nth Node from End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) – Medium

---

## 🧠 Hash Map / Set

**When to use:**  
- Frequency counting, constant-time lookup, duplicate detection, caching

**Core idea:**  
- Store values in a map or set to check existence, frequency, or relationships between elements

**Common Uses:**
- Lookup table
- Anagram detection
- Caching frequency

**Problems:**
1. ✅ [Two Sum](https://leetcode.com/problems/two-sum/) – Easy  
2. ✅ [Group Anagrams](https://leetcode.com/problems/group-anagrams/) – Medium  
3. ✅ [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) – Hard  
4. ✅ [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) – Medium

---

## 🧠 Sliding Window

**When to use:**  
- Find subarrays, substrings, or ranges in linear time
- When window size is fixed or dynamic based on constraints

**Core idea:**  
- Maintain a window with two pointers (`left`, `right`)
- Expand right, shrink left based on problem conditions
- Track state inside the window (frequency, count, etc.)

**Problems:**
1. ✅ [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) – Medium  
2. ✅ [Permutation in String](https://leetcode.com/problems/permutation-in-string/) – Medium

---

## 🧠 Queue / Monotonic Queue

**When to use:**  
- You need to track min/max/first-in values in a dynamic window or stream

**Core idea:**  
- Use a double-ended queue to maintain candidates
- Pop from the back if worse than the current
- Pop from the front if out of window

**Problems:**
1. ✅ [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) – Hard

---

## 🧠 Stack / Queue

**When to use:**
- Stack: next greater/smaller element, backtracking, undo/redo
- Queue: streaming values, fixed-time windows, BFS-like traversal

**Core ideas:**
- Stack: push/pop based on logic, often used with indices
- Queue: simulate a buffer, sliding time window, or level-order flow

**Problems:**
1. ✅ [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) – Medium  
2. ✅ [Implement Queue Using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) – Easy  
3. ✅ [Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/) – Easy

---

## 🧠 Array Manipulation / Prefix Techniques

**When to use:**  
- When transforming an array without extra space  
- When division is disallowed or inefficient  
- When you need prefix and/or postfix relationships

**Core idea:**  
- Use one pass to build prefix products  
- Use a second pass for postfix multiplication  
- Avoid division by tracking state manually

**Problems:**
- ✅ [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) – Medium

---

## 🧠 Intervals & Merging

**When to use:**  
- Merging overlapping intervals  
- Inserting new intervals into sorted ranges  
- Finding gaps, overlaps, or ranges on a line

**Core idea:**  
- Sort by interval start time  
- Use greedy sweep or conditionals to merge/insert intervals  
- Watch edge cases where intervals just touch or completely overlap

**Problems:**
- ✅ [Merge Intervals](https://leetcode.com/problems/merge-intervals/) – Medium  
- ✅ [Insert Interval](https://leetcode.com/problems/insert-interval/) – Medium

---

## 🧠 Graph Traversal (DFS/BFS)

**When to use:**  
- Problems involving connected components, shortest paths, or traversing all nodes  
- Grid-based problems with directional movement (up/down/left/right)  
- Cloning, component labeling, or reachability problems

**Core Ideas:**
- Use a visited set or map to avoid cycles
- Use DFS (recursion or stack) for deep traversal
- Use BFS (queue) for shortest path or level-by-level search
- Grids can be treated as undirected graphs with 4-directional neighbors

**Problems:**
- ✅ [Number of Islands](https://leetcode.com/problems/number-of-islands/) – Medium  
- ✅ [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) – Medium  
- ✅ [Clone Graph](https://leetcode.com/problems/clone-graph/) – Medium

---

## 🧠 Dynamic Programming (1D)

**When to use:**  
- Problems with overlapping subproblems and optimal substructure  
- You’re asked to maximize/minimize something or count ways to do something

**Core Ideas:**  
- Use a `dp[]` array or rolling variables to store solutions to smaller subproblems  
- Bottom-up tabulation avoids recursion depth issues  
- Track current, previous, and two-back states

**Problems:**
- ✅ [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) – Easy  
- ✅ [House Robber](https://leetcode.com/problems/house-robber/) – Medium  
- ✅ [House Robber II](https://leetcode.com/problems/house-robber-ii/) – Medium

---

## 🧠 Linked Lists

**When to use:**  
- When you need constant-time insertions or deletions without shifting  
- When recursion or in-place pointer manipulation is expected  
- For problems that require scanning, reversing, merging, or detecting cycles

**Core Ideas:**  
- Use dummy node to simplify logic  
- Use fast/slow pointers for cycle/midpoint  
- Be careful with null checks and pointer updates

**Problems:**
- ✅ [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) – Easy  
- ✅ [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) – Easy  
- ✅ [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) – Easy

---

## 🧠 Binary Search Variants

**When to use:**  
- Searching in sorted arrays, rotated arrays, or when the problem has a monotonic property  
- You’re narrowing a search range using mid-point logic

**Core Ideas:**  
- Use `while (left <= right)` or `while (left < right)`  
- Carefully update `left` and `right` based on comparisons  
- Watch for rotated/split arrays and directional peaks

**Problems:**
- ✅ [Binary Search](https://leetcode.com/problems/binary-search/) – Easy  
- ✅ [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) – Medium  
- ✅ [Find Peak Element](https://leetcode.com/problems/find-peak-element/) – Medium

---

## 🧠 Topological Sort

**When to use:**  
- When you're asked to determine a valid order of tasks  
- When the input is a directed graph with dependencies  
- When you need to detect a cycle in a dependency chain

**Core Ideas:**  
- Use DFS with 3-state visited array (unvisited, visiting, visited)  
- Detect back edges → cycle  
- Build the post-order DFS result in reverse for ordering

**Problems:**
- ✅ [Course Schedule](https://leetcode.com/problems/course-schedule/) – Medium  
- ✅ [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) – Medium

---

## 🧠 Backtracking

**When to use:**  
- Generating all combinations, permutations, or paths  
- Problems with decision trees and pruning  
- Word search, N-Queens, Sudoku-style problems

**Core Ideas:**  
- Add to path, recurse, and remove (backtrack)  
- Track state via indices, visited markers, or totals  
- Base case pushes to result; avoid mutating shared state

**Problems:**
- ✅ [Subsets](https://leetcode.com/problems/subsets/) – Medium  
- ✅ [Combination Sum](https://leetcode.com/problems/combination-sum/) – Medium  
- ✅ [Word Search](https://leetcode.com/problems/word-search/) – Medium

---

## 🧠 Trie / Prefix Tree

**When to use:**  
- Fast prefix lookups or autocomplete  
- Dictionary matching and spell-check  
- Wildcard search (with DFS logic)

**Core Ideas:**  
- Build character nodes from root to leaf  
- Use `Map<char, TrieNode>` for flexibility  
- Use flags like `isWord` to detect terminal nodes

**Problems:**
- ✅ [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/) – Medium  
- ✅ [Replace Words](https://leetcode.com/problems/replace-words/) – Medium  
- ✅ [Add and Search Word](https://leetcode.com/problems/add-and-search-word-data-structure-design/) – Medium

---

## 🧠 Dynamic Programming (Intermediate)

**When to use:**  
- When the problem involves building a value from many paths or segments  
- When string, coin, or array problems involve multiple transitions

**Core Ideas:**  
- Use `dp[i]` to store optimal sub-solutions  
- For coin change, think in terms of min steps to a total  
- For LIS, track max sequence lengths  
- For string break, think: "can I reach index `i`?"

**Problems:**
- ✅ [Coin Change](https://leetcode.com/problems/coin-change/) – Medium  
- ✅ [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) – Medium  
- ✅ [Word Break](https://leetcode.com/problems/word-break/) – Medium

---

## 🧠 Dynamic Programming – String / 2D Table

**When to use:**  
- When solving string transformation, segmentation, or partitioning problems  
- When the state depends on substring slices or previous character matches

**Core Ideas:**  
- 1D DP for left-to-right decisions (Decode Ways)  
- 2D DP for edit distance or table of character comparisons  
- Use helper functions like isPalindrome or slicing

**Problems:**
- ✅ [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) – Medium  
- ✅ [Decode Ways](https://leetcode.com/problems/decode-ways/) – Medium  
- ✅ [Edit Distance](https://leetcode.com/problems/edit-distance/) – Hard

---

## 🧠 Advanced Graphs

**When to use:**  
- When determining custom order (e.g. alphabet, tasks)  
- When identifying critical nodes or edges  
- When graphs are implied by ordering or structure

**Core Ideas:**  
- Kahn’s Algorithm for topological sort  
- DFS with discovery and low-link tracking for articulation points  
- Build graph manually before traversal

**Problems:**
- ✅ [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) – Hard  
- ✅ [Critical Connections](https://leetcode.com/problems/critical-connections-in-a-network/) – Hard

---

## 🧠 Bit Manipulation

**When to use:**  
- Problems involving XOR, binary toggles, power of two, or bit operations  
- Space-efficient solutions using bit flags or bitsets

**Core Ideas:**  
- XOR: cancels duplicates (`a ^ a = 0`)  
- Count 1s: shift and mask OR use `n & (n - 1)` trick  
- Reversing bits: shift result left, OR in `n & 1`, shift n right

**Problems:**
- ✅ [Single Number](https://leetcode.com/problems/single-number/) – Easy  
- ✅ [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) – Easy  
- ✅ [Reverse Bits](https://leetcode.com/problems/reverse-bits/) – Easy

---

## 🧠 SQL Query Patterns

**When to use:**  
- Analyzing table relationships, rankings, and aggregations

**Core Ideas:**  
- `JOIN`: Combine rows across tables using common keys  
- `RANK()`, `DENSE_RANK()`: Assign ranks across partitions or ordered results  
- Subqueries: Use nested queries for filtering, comparisons, or lookups  
- `LIMIT`, `OFFSET`: Control result set length

**SQL Problems:**
- ✅ Combine Two Tables – LEFT JOIN  
- ✅ Second Highest Salary – Subquery + MAX  
- ✅ Rank Scores – Window Function

---

## 🗣️ Behavioral Interview Patterns

- Use STAR format to tell stories clearly
- Keep answers to 60–90 seconds
- Focus on your individual actions
- Always share results + impact (numbers, feedback, results)

**Prompt Examples:**
- Tell me about a challenge
- Tell me about a conflict
- Tell me about something you built
- Tell me about something you taught

---

## 🧠 Math / Overflow Logic

**When to use:**  
- Avoiding built-in operators  
- Bit manipulation for performance  
- Edge-safe math under constraints

**Core Ideas:**  
- Add Binary: work from right to left with carry  
- Divide Integers: bit shifts to simulate fast subtraction  
- Pow(x, n): log time recursion via squaring

**Problems:**
- ✅ [Add Binary](https://leetcode.com/problems/add-binary/) – Easy  
- ✅ [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) – Medium  
- ✅ [Pow(x, n)](https://leetcode.com/problems/powx-n/) – Medium
