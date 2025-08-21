# DeShaw Interview Experience  

**Article by**: Tejaswee Kumar Singh 
**Role**: SDET  
**Mode**: On-campus  

---

## Interview Process  

### Online Assessment Round  
- Duration: **90 minutes**  
- **Questions**:  
  - Two DSA questions (LeetCode medium).  
  - 28 aptitude questions.  

---

### Technical Round 1  
- **DSA Question 1**:  
  - Problem: Given numbers in one stack and another stack empty, print numbers either in ascending or descending order using no extra space.  
  - Solution: Solved using **monotonic stack**.  
  - Follow-up: Explained **time complexity** of the solution.  

- **DSA Question 2**:  
  - Problem: Given two strings `S1` and `S2`, find if `S2` is a factor of `S1`.  
    - Example: `S1 = "absabsabsabs"`, `S2 = "abs"` → `S2` is a factor of `S1`.  
  - Follow-up:  
    - Example: `S1 = "abdefabdefabdef"`, `S2 = "adf"` → Find minimum insertions, deletions, or updates required to make `S2` a factor of `S1`.  
    - Solution: Used **sliding window with hashing**.  

- **DBMS (SQL Query)**:  
  - Problem: Given two tables, join them and find the **Nth highest salary of the employee**.  

- **Operating System**:  
  - Discussion on processes and threads.  
  - How different processes communicate.  
  - How threads communicate.  
  - Role of shared variables and where they reside in the system.  
  - Whether threads can use **message passing** and how it works.  

- **Project Discussion**:  
  - Explained the **basic working mechanism of YOLO models** and reasons for using it over others.  
  - Mathematical questions:  
    - Walkthrough of methods used to calculate **player speed** and **total distance covered in real time**.  
    - Handling **smooth tracking** during fast-paced action when multiple players and the ball moved simultaneously.  

---

### HR Round  
- Basic Introduction.  
- Common behavioral questions.  

---

### Technical Round 2  
- **Project**:  
  - Explained project and backend architecture implemented using **AWS cloud services**.  
  - Follow-up: How to optimize responses when data changes too frequently.  

- **DSA Question 1**:  
  - Problem: Given a tree, **serialize it into text format**, store in a file, and then **deserialize** it back into the same tree.  
  - Hint: Used **inorder and preorder traversal** for deserialization.  

- **DSA Question 2**:  
  - Problem: A cab driver wants to maximize profit.  
    - Inputs: `pickupTime[]`, `dropTime[]`, `profit[]` (length n).  
    - Profit for i-th ride = `dropTime[i] - pickupTime[i] + profit[i]`.  
    - Constraint: Next ride’s pickup time ≥ previous ride’s drop time.  
  - Solution:  
    - First solved using recursion + DP.  
    - Then optimized using **greedy + binary search** after sorting by `dropTime`.  
    - **Time Complexity**: O(N log N).  
    - Follow-up: Explained why sorting was done by `dropTime` instead of `pickupTime` or `profit`.  

- **System Design**:  
  - Task: Given a `User` class with basic attributes and methods, demonstrate a simple **messaging flow like WhatsApp** using OOP.  
  - Requirement: Separate classes to handle **audio, video, and text messages**.  

