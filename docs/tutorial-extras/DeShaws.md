# DeShaw Interview Experience

**Role**: SDET <br/>
**Article by**: Tejaswee Kumar Singh

## Interview Process



### Online Assessment Round

- **DSA Questions**
  - Two LeetCode Medium-level questions.

- **Aptitude Questions**
  - 28 aptitude questions.

- **Duration**
  - 90 minutes.

---

### Technical Round 1

- **DSA Questions**
    - Sorting a Stack:  
        - Problem: Given two stacks (one with numbers and one empty), print the numbers in ascending or descending order using no extra space. Explain the time complexity of the solution.  
        - Solution: Used a monotonic stack.
  
    - String Factorization:  
        - Problem: Check if string `S2` is a factor of `S1`.  
        - Example: `S1 = 'absabsabsabs'`, `S2 = 'abs'`, result: `S2` is a factor of `S1`.  
    - Follow-up: Given `S1 = 'abdefabdefabdef'` and `S2 = 'adf'`, find the minimum number of insertions, deletions, or updates required to make `S2` a factor of `S1`.  
    - Solution: Used sliding window with hashing.

- **DBMS (SQL Query)**
    - Join two tables and find the Nth highest salary of an employee.

- **Operating Systems**
    - Discussion Topics:
        - Processes vs Threads.
        - Inter-process communication methods.
        - Thread communication using shared variables, including where shared variables reside.
        - Thread communication using message passing.

- **Project Discussion**
    - Explained:
        - The working mechanism of YOLO models and reasons for its preference over other models.
        - Methods to calculate player speed and total distance covered in real time.
        - Ensuring smooth tracking during fast-paced action with multiple moving players and the ball.
        - Mathematical approaches used in the project.

---

### HR Round

- **Introduction**
    - Shared a brief self-introduction.

- **Behavioral Questions**
    - Common HR questions to assess communication and attitude.

---

### Technical Round 2

- **Project Discussion**
    - Explained the backend architecture implemented using AWS cloud services.
    - Discussed optimizing responses when data changes frequently.

- **DSA Questions**
    - Tree Serialization:
        - Problem: Serialize a tree into text format, store it in a file, and then deserialize it back into the same tree.  
        - Solution: Used inorder and preorder traversal for deserialization.

    - Maximizing Cab Driver Profit:
        - Problem: Maximize the cab driver's profit given:
        - `pickuptime` array.
        - `droptime` array.
        - `profit` array.  
        - Constraints: The next ride's pickup time must be ≥ the previous ride's drop time.  
    - Solution: 
        - First solved using recursion and DP.
        - Optimized using a greedy approach by sorting according to the `droptime` array and using binary search to find the next pickup time.  
    - Time Complexity: O(NlogN).  
    - Explanation: Explained why sorting by `droptime` is better than sorting by `pickuptime` or `profit`.

- **System Design**
    - Problem: Demonstrate a messaging flow like WhatsApp using basic OOP concepts.  
    - Requirements:
        - A `User` class with basic attributes and methods.
        - Separate classes for handling audio, video, and text messages.
