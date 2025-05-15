# Mistakes & Gotchas Log

## 🧠 Longest Substring Without Repeating Characters
- Initially forgot to shrink the left pointer in the inner `while` loop
- Key realization: window must shrink until no duplicates

## 📌 Group Anagrams
- Missed that sorting string is key → used char count map first, which was more complex
- Simplified version used `word.split().sort().join()` as hash key

## 🔄 Remove Nth Node From End
- Initially forgot to use dummy node → edge case with head removal failed
