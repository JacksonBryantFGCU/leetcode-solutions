# Queue & Monotonic Queue Pattern

Queues are first-in-first-out (FIFO) data structures, commonly used for **breadth-first search**, **sliding window max**, or **streaming problems**. A **monotonic queue** is a specialized structure that maintains order (increasing or decreasing) within the queue for optimized max/min queries.

---

## 🧠 Common Use Cases

- Tracking maximum/minimum in a moving window
- BFS (breadth-first search)
- Scheduling / buffering in real-time systems
- Managing candidate sets in greedy algorithms

---

## 🔧 Monotonic Queue Strategy

- Use a double-ended queue (deque)
- Maintain decreasing order for max (or increasing for min)
- Pop from back while incoming value breaks monotonicity
- Discard front if it leaves the window

---

## ✅ Problems Covered

| Problem | Difficulty | Link |
|--------|------------|------|
| Sliding Window Maximum | Hard | [LeetCode #239](https://leetcode.com/problems/sliding-window-maximum/) |
