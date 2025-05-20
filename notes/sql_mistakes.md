# SQL Mistakes & Gotchas

## 🧍 Combine Two Tables
- Forgot to use `LEFT JOIN` → excluded people without addresses
- Used `INNER JOIN` which fails when there's no match

## 💰 Second Highest Salary
- Used `LIMIT 1 OFFSET 1` without ordering → unpredictable result
- Forgot `MAX(Salary)` in subquery, caused invalid comparison

## 🧮 Rank Scores
- Used `RANK()` instead of `DENSE_RANK()` → skipped ranks for ties
- Forgot `ORDER BY Score DESC` → ranked lowest score as highest
