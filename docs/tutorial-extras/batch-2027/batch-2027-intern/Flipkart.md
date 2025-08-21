# Flipkart Interview Experience  

**Company Name**: Flipkart  
**Job Description**: SDE-1 (Internship)  

---

## Interview Process  

### Online Assessment Round  
- **Duration**: 1 hour 30 minutes  
- **Content**:  
  - **DSA Questions (3)**:  
    1. **Connectivity in an Undirected Graph**  
       - Solvable using **BFS/DFS**.  
       - Optimal solution: **Union Find (Disjoint Set DS)**.  
    2. **Rotation of String**  
       - Solvable using **Simulation with Hashmap** and **Index Mapping with Traversal**.  
    3. **Minimum Number of Nodes in Prefix Tree of an Array of Strings**.  
- **Mode**: Online  

---

### Technical Round 1  
- **DSA Question**:  
  - **Problem**: Given an `m × n` matrix, with:  
    - Left + Top boundaries → Pacific Ocean.  
    - Right + Bottom boundaries → Atlantic Ocean.  
    - Rain flows from a cell to connected (4-directional) cells if their value ≤ current cell’s value.  
    - Return coordinates of cells from where water flows to **both oceans**.  
  - **Solution**: Solved using **Multi-Source BFS** from boundary cells. Can also be solved using **DFS**.  

- **Project Discussion**:  
  - Project: **Mock Mailing Server**.  
  - Questions: Motivation, problem solved, real-life use case.  
  - Answer Highlights:  
    - Asynchronous processing feature makes the system **scalable and robust**.  
    - Demonstrated **real-world applicability**.  

---

### Technical Round 2  
- **Project Discussion 1**:  
  - Again discussed **Mock Mailing Server** in detail.  
  - Explained:  
    - Architecture and functionalities.  
    - How **offloading mail sending** to a separate **Node.js process** improved scalability and robustness.  
    - Use of **Redis Queue** for streamlined mail processing.  
    - How **Node.js Mail Consumer** published `mail_sent` events via **Redis Pub-Sub**, and how the **receiver’s WebSocket server** subscribed to these events.  

- **Project Discussion 2**:  
  - **Academic Project**: Automata Theory (Python, OOP-based).  
  - Features:  
    - Construction of **DFA** using user input (character set, states, transitions, etc.).  
    - **Trimming unreachable states**.  
    - **Minimization using Table Filling Algorithm**.  
    - Functionality to test sample strings against DFA.  

- **Behavioral Questions**:  
  - Situational questions:  
    - Working in a group.  
    - Contributing to a team project.  
    - Defining ownership levels in a team.  

- **Experience-Based Questions**:  
  - Asked about **previous internship** as a **remote Full-Stack Intern** at a startup.  

---

---

[Click to read interview experiences of other successful Flipkart interns from the 2027 batch](https://drive.google.com/drive/folders/1wftwiv7NsSjc3466c-KpD3eDc1ND3_AP?usp=drive_link)

---