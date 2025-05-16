# Mistakes & Gotchas Log

## 🧠 Longest Substring Without Repeating Characters
- Initially forgot to shrink the left pointer in the inner `while` loop
- Key realization: window must shrink until no duplicates

## 📌 Group Anagrams
- Missed that sorting string is key → used char count map first, which was more complex
- Simplified version used `word.split().sort().join()` as hash key

## 🔄 Remove Nth Node From End
- Initially forgot to use dummy node → edge case with head removal failed

## 🔁 Max Consecutive Ones III
- Mistakenly tried to reset window on each 0 → needed to only shrink when k < 0
- Insight: you can “spend” flips but must return them when shrinking

## 🔁 Permutation in String
- Initially compared maps with object equality — failed
- Solution: use array of 26 and `.join()` to compare frequency maps

## 🚪 Sliding Window Maximum
- Forgot to pop from the front when index was out of window range
- Missed that the deque should store indices, not values

## 🌡️ Daily Temperatures
- Initially forgot to store indices in stack — used values directly which broke logic
- Missed when to pop from stack → only pop when current is **greater**

## 🧱 Implement Queue Using Stacks
- Tried to push directly to output stack — broke FIFO
- Fixed by always pushing to `input`, then shifting to `output` on pop/peek

## 🕒 Number of Recent Calls
- Forgot to shift expired timestamps outside the 3000ms window
- Must remove values from front of queue if they’re older than (t - 3000)

## ✖️ Product of Array Except Self
- Forgot to initialize the result array with `1`, which broke prefix/postfix logic
- Tried using division first → failed test cases where input includes zero

## 📚 Merge Intervals
- Missed the need to sort intervals before merging
- Failed when adjacent intervals shared a boundary (e.g. `[1,4], [4,5]`)
- Fixed by checking if `merged[i-1][1] >= current[0]`

## ➕ Insert Interval
- Tried to merge during iteration without isolating 3 phases:
  - Before merge
  - Merging overlap
  - After merge
- Forgot to push the new interval after merging → caused missing intervals in result

## 🌊 Number of Islands
- Initially forgot to mark grid cells as visited, leading to infinite recursion
- DFS must mutate the grid or use a visited set to prevent re-traversal

## 📏 Max Area of Island
- Forgot to accumulate area by returning +1 from each DFS call
- Must update `maxArea = Math.max(maxArea, dfs(...))` on each component

## 🧬 Clone Graph
- Tried cloning without a visited map → caused infinite recursion on cyclic graphs
- Key realization: you must track original node → cloned node in a Map to avoid revisiting

## 🪜 Climbing Stairs
- Originally used recursion — too slow without memoization
- Fixed by switching to bottom-up with two rolling variables

## 🏠 House Robber
- Tried to use a full `dp[]` array → unnecessary space usage
- Forgot to update `prev2` before assigning `prev1`, causing logic bug

## 🔄 House Robber II
- Missed edge case where nums.length === 1
- Initially didn’t realize you must run `rob()` twice to skip either first or last house (not both)

## 🔁 Reverse Linked List
- Forgot to advance `curr` after setting `curr.next = prev`
- Accidentally reversed `prev = curr.next` → caused loop

## 🔁 Linked List Cycle
- Forgot to check that `fast` and `fast.next` are not null
- Accidentally returned true when slow !== fast

## 🔁 Merge Two Sorted Lists
- Forgot to connect remaining nodes after one list ends
- Missed dummy node → caused edge cases when list1 or list2 was null

## 🔍 Binary Search
- Off-by-one error: used `left < right` instead of `left <= right`
- Missed returning `-1` when target not found

## 🔄 Search in Rotated Sorted Array
- Compared against wrong half when array was rotated
- Forgot to check if left-to-mid was sorted before comparing target

## ⛰️ Find Peak Element
- Assumed global max instead of local peak
- Forgot to return `left` as final result after loop

## 🧭 Course Schedule
- Forgot to track 3 visited states → led to missed cycle detection
- Forgot to check every node in case of disconnected components

## 📚 Course Schedule II
- Didn't reverse the post-order DFS result → gave incorrect order
- Used a result array instead of a stack (acceptable, but be consistent)

## 🧩 Subsets
- Initially mutated `path` directly without copying → shared state in results
- Forgot to backtrack (`path.pop()`)

## ➕ Combination Sum
- Excluded candidates too early → missed duplicate use
- Forgot base case for total > target → caused infinite recursion

## 🔤 Word Search
- Didn’t mark visited → allowed revisiting same cell
- Forgot to reset visited cell (backtrack) after exploring path

## 🔡 Implement Trie
- Forgot to set `isWord = true` at the end of insert
- Used plain object instead of `Map` → missed undefined check

## ✍️ Add and Search Word
- Skipped DFS for `.` character — wildcard search failed
- Forgot to return `true` if **any** path matches — not just the first

## 🔁 Replace Words
- Used startsWith instead of full trie traversal → TLE
- Didn’t stop early when root match was found
