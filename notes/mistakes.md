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
