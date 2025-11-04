# Media.net Interview Experience  
**Article by**: Swaroop
---

## Round 1: Online Assessment  

- **Note**: Media.net uses **MOSS** (Measure of Software Similarity) to detect plagiarism.  
  - Even **99% refactoring** can still be flagged.  
  - Best way → solve on your own.  

### Questions (3 DS Algo problems)  

1. **Reverse given part of a Linked List**  
   - Reverse from the 4th node to the 10th node in a linked list.  
   - Reference: [LeetCode – Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)  

2. **Populate the next pointer of each node in a tree with its right node (same level)**  

   **Example Input**  
       1
     /   \
    2     3
   / \   / \
  4   5 6   7

**Example Output**  
       1 -> NULL
     /   \
    2 -> 3 -> NULL
   / \     / \
  4->5->6->7 -> NULL

- Reference: [InterviewBit – Populate Next Right Pointers Tree](https://www.interviewbit.com/problems/populate-next-right-pointers-tree/)  
- Approach: Simple **level order traversal using queue**.  

3. **String formation using matrix traversal**  
- Example: `B = [[a,b,c],[d,e,f],[g,h,i]]`  
- String `A = "gdefc"` → **True** (path: g → d → e → f → c).  
- String `A = "gdec"` → **False** (cannot form).  
- Approach: **DFS multisource search** (not DP).  

👉 Overall difficulty: **Medium-level OA**.  
👉 Only **7 people were selected** due to MOSS checks.  

---

## Round 2: Google Meet Interview  

- **Format**: Note-maker (not a code editor).  

### Flow of Interview  

1. **Introduction** (4–5 mins about myself).  

2. **Resume-based Questions**  
- Why use **Node.js** and not **Express** or **Spring Boot**?  
- Explain **event loop** in Node.js.  

3. **Operating System**  
- Purpose of **multithreading**.  
- What if processor is **single-core**?  
- How many threads can a process have?  

4. **Networking**  
- Basics of **TCP vs UDP** and use cases.  
- What happens when you **search a URL** in a browser?  

5. **DBMS & SQL**  
- **ACID properties**.  
- SQL query: Find the **5th largest salary** in employee table.  

6. **Algorithm Question**  
- Given an array, perform operation to minimize array size:  
  - If consecutive equal numbers exist → merge & increase by 1.  
  - Example:  
    - `[1,2,2,1] → [1,3,1]`  
    - `[1,4,3,3,5] → [1,4,4,5] → [1,5,5] → [1,6]`  

- My Approach:  
  - **Brute force**: Try all sequences.  
  - **DP with memoization**: Re-check sequences until array becomes size `1` or unmergeable.  
- Interviewer expected an **optimal solution** → I couldn’t complete it in time.  

7. **Closing Discussion**  
- Talked about **Media.net** and its **work culture** (15 mins).  

---

## Outcome  

- Overall experience: **Good discussion**, but I couldn’t optimize the algorithm.  
- **Result**: No one was selected for further rounds.  

---
[Click to read interview experiences of other candidates who appeared Media.Net interview from the 2026 batch](https://drive.google.com/drive/folders/1Z7SwjTXD0fQFsl954JXd-JIsD6rXpqeF?usp=drive_link)