# Paltech Interview Experience  

**Role**: SDE Trainee + Full Time  
**Company**: Paltech  
**Article by**: Rishabh Verma  
**Mode**: On-Campus (Offline)  

---

## Round 1: Online Assessment (25 minutes)

**Format**:  
- **30 Questions Total**  
  - **25 Aptitude + Reasoning + Logical Ability**  
  - **5 Programming Concepts**  
    - File Handling  
    - Sorting Algorithms  

**Focus Area**:  
- Logical thinking  
- Time management  
- Basic programming fundamentals  

---

## Round 2: Paper-Pen Based Coding Round (3 Sub-Rounds)

Each sub-round had **one coding question**, and **each round was elimination-based**. Only candidates who solved the question advanced to the next sub-round.

---

### **Sub-round 1: String – Anagram with At Most One Removal**

You are given a vector of string pairs.  
For each pair, check whether the two strings can be made **anagrams** after removing **at most one character** from **any one or both** strings.

**Input**:  
- A 2D vector `pairs`, where  
  - `pairs[i][0]` → first string  
  - `pairs[i][1]` → second string  

**Output**:  
- Vector of `"YES"` / `"NO"`  

**Logic**:  
- Allow one-character tolerance while matching character frequency.  

**Difficulty**: Easy–Medium  
**Similar Problem**: LeetCode 242 – Valid Anagram (with modification)

---

### **Sub-round 2: Count and Say Sequence**

Given a positive integer **n**, generate the **n-th term** of the Count and Say sequence.

**Definition**:  
- 1 → "1"  
- 2 → "11" (one 1)  
- 3 → "21" (two 1s)  
- 4 → "1211" (one 2, one 1)  
- and so on...  

Each term is formed by **reading the digits** of the previous term.

**Input**:  
- Integer `n`  

**Output**:  
- String (n-th term of sequence)  

**Follow-up**:  
- Given a string (not integer n), generate the next sequence term.  

**Difficulty**:  
- Base → Easy  
- Follow-up → Medium  

**Reference**: LeetCode 38 – Count and Say  

---

### **Sub-round 3: Book Buying – Dynamic Programming**

You are given **n books** arranged in a queue, each with a price.  
You must buy all books in order (only from left or right).

**Allowed Operations**:  
1. Buy leftmost book  
2. Buy rightmost book  
3. Buy a pair (left + right) at a fixed **pairCost**  
   - At most **k pairs** allowed  

**Objective**:  
Minimize the **total cost**.

**Input**:  
- `price[]` → price of each book  
- `pairCost` → cost for paired operation  
- `k` → max allowed pairs  

**Output**:  
- Minimum cost to buy all books  

**Difficulty**: Medium–Hard  
**Reasoning**:  
- Requires DP → `dp[left][right][pairs]`  
- Choose optimally between: left only / right only / pair  

**Similar Problems**:  
- LeetCode 312 – Burst Balloons  
- GFG – Optimal Strategy for a Game  

---

## Round 3: Techno–HR Interview

This round covered a mix of **technical topics** and **personal discussion**.

### **Technical Areas Asked**:
- DBMS  
- Operating System  
- OOPs  
- Resume Projects  
  - Working  
  - Tech stack  
  - Challenges faced  

### **Puzzles Asked**:
1. Place **5 queens on a 5×5 chessboard** so that none attack each other.  
2. Cut a cake into **8 pieces using only 3 cuts**.

---

## Conclusion

Paltech focused heavily on:  
- Logical thinking  
- Coding ability  
- Core CS fundamentals  
- Communication & problem-solving  

[Click to read interview experiences of other successful Paltech hires from the 2026 batch](https://drive.google.com/drive/folders/1pPPVlfjjivr7lgkAXx6T41npNdlnIIxD?usp=sharing)
