# Topological Sort & Course Scheduling

Topological sort is used to order the nodes of a **Directed Acyclic Graph (DAG)** such that every edge `u → v` places `u` before `v`. It's also used to detect cycles.

---

## 🧠 Core Concepts

- DFS with state tracking (unvisited, visiting, visited)
- Use visited array or color map for cycle detection
- Post-order DFS = topological order

---

## ✅ Problems Covered

| Problem | Difficulty | Link |
|--------|------------|------|
| Course Schedule | Medium | [LeetCode #207](https://leetcode.com/problems/course-schedule/) |
| Course Schedule II | Medium | [LeetCode #210](https://leetcode.com/problems/course-schedule-ii/) |
