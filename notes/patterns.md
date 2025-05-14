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
1. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) – Easy  
2. [3Sum](https://leetcode.com/problems/3sum/) – Medium  
3. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) – Medium

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
1. [Two Sum](https://leetcode.com/problems/two-sum/) – Easy  
2. [Group Anagrams](https://leetcode.com/problems/group-anagrams/) – Medium  
3. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) – Hard

---
