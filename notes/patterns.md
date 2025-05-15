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
