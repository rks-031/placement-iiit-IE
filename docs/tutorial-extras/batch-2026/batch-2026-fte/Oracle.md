# Oracle Interview Experience  

**Company Name**: Oracle  
**Article by**: Soubhik  
**Role**: Associate Software Developer (CGIU)  
**Interview Date**: August 25  
**Mode**: On-campus  

---

## Interview Process  

### Round 1 – Online Assessment (OA) (95 mins)  
The OA had four sections covering aptitude, reading comprehension, probability, and core CS fundamentals like DBMS, OOP, SQL, OS, and Networking. There were also two coding problems:  

- **Coding 1 - Minimize the Maximum of an Array**  
  - Problem: Given an array of positive integers, redistribute values from one index to the previous to minimize the maximum value in the array.  
  - Solution: Used **binary search** on the possible maximum with a greedy check.  

- **Coding 2 - JSON Diff Tool**  
  - Problem: Develop a service to compare two JSON objects (up to size 1e5) and identify differences in key-value pairs.  
  - Solution: Implemented using **string parsing and maps**.  

---

### Round 2 – Technical Interview 1  
- Started with introductions and a discussion about my resume.  
- Topics covered:  
  - Internship experience.  
  - Messaging queues.  
  - Difference between **AOF and RDB in Redis**.  
  - Architecture of my projects.  
- Internship-related questions:  
  - Why do we need **FMV Adjustments**?  
  - **SSO Architecture**.  
  - Difference between **SSO and OAuth 2.0**.  

- **DSA Problem**:  
  - **Sum of Longest Increasing Subsequence (LIS)**.  
  - Approach:  
    - Explained brute force (exponential).  
    - Optimized with **DP (O(n²))**.  
    - Further improved using **binary search (O(n log n))**.  
    - Wrote pseudocode in C++.  

---

### Round 3 – Technical Interview 2  
- Started with introductions and a resume-based question:  
  - **Q: Why do we need Redis when programming languages already have hashmaps?**  

- **DSA Problems**:  
  1. Finding the **nth node from the end of a linked list** – solved using the two-pointer method with offsetting.  
  2. Finding the **Lowest Common Ancestor (LCA) in a binary tree** – solved with DFS.  
  3. Finding **all pairs of numbers whose sum is divisible by any multiple of 60** – solved using complement-based hashing.  

---

### Round 4 – Technical Interview 3  
- Short round with a single question:  

  - **Problem**: Given a very long string of digits, count all substrings that represent powers of 2. The string was too large to fit in RAM and resided on Disk.  
  - **Approach**:  
    - Process the string in chunks.  
    - Precompute all possible powers of 2 as strings.  
    - Slide a window over the chunks and check substrings against the precomputed set using hashing.  
    - From an **HLD perspective**: Designed as a pipeline with a disk reader (load chunks), a processor (extract and check substrings), and an aggregator (combine counts). Suggested **parallel processing** for scalability.  

---

### Round 5 – HM Round  
- Began with introductions and included a mix of puzzle and behavioral questions.  

- **Puzzle**:  
  - Jug problem: Measure exactly 4 liters using only a 3L jug and a 5L jug with an infinite water supply and no measuring marks.  

- **Behavioral & Scenario-Based Questions**:  
  - Where do you see yourself in 5 years?  
  - If you were a tech lead, how would you manage your team?  
  - How would you handle a situation where a team member is absent, manpower is short, and a deadline is approaching?  
  - Challenging problems that you solved.  
  - Do you ever plan to switch technical domains?  
  - Do you have plans to pursue an MS in the future?  
  - What are some real-life applications of data structures?  

---

[Click to read interview experiences of other successful Oracle hires from the 2026 batch](https://drive.google.com/drive/folders/1evihNK52Hs6f972nDezXSBdEqKBiaXSh?usp=drive_link)

---