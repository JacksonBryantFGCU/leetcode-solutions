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

