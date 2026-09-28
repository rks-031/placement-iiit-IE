# Infosys Interview Experience

**Article By:** Subhro Mitra

**Company Name:** Infosys

**Job Description:** Specialist Programmer (SP - L1) / Digital Specialist Engineer (DSE)

---

## Round 1 — Online Assessment

**Mode:** Online — Wingspan Proctored Browser

**Content:**

- **No. of Coding Questions:** 4
- **Difficulty:** Easy, Medium, Hard and Complex
- **Problem Difficulty:** Three questions were aligned with standard LeetCode Medium-to-Hard difficulty levels, while the fourth focused heavily on complex data-structure implementation.
- **Selection Criteria:** Candidates were required to completely solve at least one question, with the solution compiling successfully and passing **100% of the hidden test cases** without time-limit or memory-limit exceptions.
- **Assessment Platform:** Wingspan Proctored Browser

---

## Round 2 — Pre-Interview Assessment

Candidates who cleared the initial Online Assessment were subjected to a secondary coding round to finalize the role designation.

### Assessment Details

- **Mode:** Online
- **Platform:** Wingspan
- **Duration:** 45 minutes
- **No. of Coding Questions:** 2
- **Content:** Algorithmic coding problems

### Role Designation

- **Specialist Programmer (SP - L1):** To guarantee selection for the L1 role, candidates were required to completely solve the **Easy** question and pass all associated test cases.

- **Digital Specialist Engineer (DSE):** Candidates who failed to pass all test cases for the Easy problem could be considered for the DSE role. Final selection and role mapping depended on their overall performance in the subsequent in-person interview.

### System Design Assessment

Candidates who demonstrated exceptional problem-solving ability by completely solving **2 or more questions** in the first OA experienced a different interview trajectory.

These candidates could be presented with System Design problems during the pre-interview phase or the main interview.

The expectations included:

- **High-Level Design (HLD)** principles
- **Object-Oriented Programming (OOP)** architecture
- **Entity-Relationship (ER) diagrams**

---

## Round 3 — In-Person Technical & HR Interview

The final phase was a comprehensive in-person interview combining technical evaluation with behavioral and HR assessment.

The interview started with a discussion about the candidate's approach to the problems encountered during the Pre-Interview Assessment.

This was followed by:

- Self-introduction
- Resume walkthrough
- Discussion of listed skills, projects and achievements

Interestingly, despite the resume walkthrough, the panel did not initiate deep-dive discussions into the specific projects mentioned on the resume.

### Technical Coding Evaluation

The panel presented three coding problems back-to-back. Candidates were expected to explain the approach, write the code and discuss time and space complexities.

#### 1. Detect a Loop in a Linked List

- **Optimal Approach:** Floyd's Cycle-Finding Algorithm, also known as the **Tortoise and Hare** approach, using two pointers moving at different speeds.

#### 2. Longest Palindromic Substring

- **Optimal Approach:** Expand Around Center or Dynamic Programming.
- **Follow-up:** The interviewer specifically asked about **Manacher's Algorithm** to check whether the candidate knew how to solve the problem in strict **O(N)** time.

#### 3. Find the Unique Element in an Array

- **Problem:** Find the element appearing exactly once in an array of positive integers where every other element appears an even number of times.
- **Optimal Approach:** Bitwise **XOR** operation.

Since `A ^ A = 0`, XORing all elements cancels out the duplicate elements and leaves only the unique element.

- **Time Complexity:** O(N)
- **Space Complexity:** O(1)

### Core Computer Science Fundamentals

The technical discussion then shifted toward core Computer Science subjects.

#### Operating Systems (OS)

Discussed:

- Deadlocks
- Four necessary conditions for deadlock:
  - Mutual Exclusion
  - Hold and Wait
  - No Preemption
  - Circular Wait
- Deadlock prevention
- Banker's Algorithm
- Semaphores vs. Mutexes
- Critical Section in process synchronization

#### Database Management Systems (DBMS)

Discussed:

- Database indexing
- How indexing improves read performance
- B-Tree data structures
- SQL query for creating an index on a specific column
- Different types of JOINs:
  - Inner Join
  - Left Join
  - Right Join
  - Full Outer Join
  - Cross Join
- Database Sharding
- Use cases of database Sharding for scaling

#### System Design & Web Technologies

Discussed:

- Design patterns
- Singleton Pattern
- Factory Pattern
- Observer Pattern
- Load Balancers
- Role and necessity of Load Balancers in distributed systems
- HTTP vs. HTTPS
- SSL/TLS encryption

#### Object-Oriented Programming — C++

Discussed:

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
- `friend` keyword
- Friend functions
- `public`, `private` and `protected` access modifiers
- Default access modifier in C++ classes
- Difference between `struct` and `class`
- Default access in `struct` — `public`
- Default access in `class` — `private`

> **Interview Tip:** If Java is mentioned on the resume instead of C++, the interview panel may shift the OS/OOP discussion toward detailed and complex **multithreading concepts**.

### HR & Behavioral Evaluation

The final part of the interview focused on behavioral questions, cultural fit, adaptability and industry awareness.

#### Standard Behavioral Questions

- Why do you want to join Infosys?
- Where do you see yourself in the next 5 years?
- What are your core strengths and weaknesses?
- How do you handle stress?
- How do you prioritize multiple goals and targets?

#### Industry Awareness & Company Knowledge

The interviewer asked:

> "Can you name any recent projects or initiatives Infosys has worked upon?"

Candidates were expected to be aware of major Infosys initiatives such as:

- **Infosys Topaz** — AI-first services utilizing generative AI.
- **Infosys Cobalt** — Cloud transformation and related services.

#### Situational / Open-Ended Question

> "In your opinion, in the age of AI, is using AI tools a boon or a bane for humans?"

The panel looked for a **balanced and analytical perspective** rather than a simple yes/no response.

---

## Round 4 — Closing & Feedback

The interview concluded with the standard question:

> "Do you have any questions for us?"

This led to an engaging discussion about:

- The specific technology stack currently used by Infosys in its production environments
- The structured methodologies used to train freshers

Before the interview concluded, the interviewer provided **direct and constructive feedback** regarding the candidate's performance and suggested areas for improvement in future technical discussions.

---

## Pro Tips

- Prepare **DSA fundamentals** thoroughly, especially linked lists, strings, arrays and common problem-solving patterns.
- Be comfortable explaining your **approach, code, time complexity and space complexity**.
- Prepare advanced algorithms such as **Manacher's Algorithm** if targeting higher-level technical roles.
- Have strong knowledge of **Operating Systems**, particularly deadlocks, synchronization, mutexes and semaphores.
- Prepare **DBMS and SQL** thoroughly, especially indexing, JOINs and database sharding.
- Be comfortable with **OOPS concepts and C++ fundamentals**.
- Prepare commonly used **Design Patterns** and understand their practical applications.
- Understand **Load Balancing, HTTP/HTTPS and SSL/TLS** at a conceptual level.
- If System Design is part of the process, prepare **HLD, OOP architecture and ER diagrams**.
- Know everything mentioned on your **resume**, including programming languages, technical skills and projects.
- Be prepared for **rapid-fire questions** from core CS subjects.
- Keep yourself updated about major **Infosys initiatives and technologies**.
- For HR questions, prepare thoughtful answers about your **career goals, strengths, weaknesses and adaptability**.
- For AI-related questions, focus on presenting a **balanced and analytical perspective**.
- During coding rounds, clearly explain your **logic before jumping into implementation**.
- Always discuss **time and space complexity** after solving a coding problem.

---

**ALL THE BEST! 🚀**

[Click to read interview experiences of other successful Infosys hires from the 2027 batch](https://drive.google.com/drive/folders/1cRf5qfe0e01lwlcH5iEbAzNLMy73GzH9?usp=sharing)


---