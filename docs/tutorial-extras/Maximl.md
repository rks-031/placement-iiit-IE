# Maximl Interview Experience

**Roles**: Software Development Engineer (Frontend & Backend Engineer)<br/>
**Article by**: Abhay Rajpoot | Deepak

## Interview Process

### Round 1: Resume Shortlisting

- The company shortlisted candidates based on their resumes, segregating them into Frontend and Backend categories based on their skills and expertise.

---

### Round 2: Technical Interview

`Frontend Engineer`
1. **Introduction**:
   - Brief introduction and discussion of internship experience and projects.

2. **DSA**:
   - **Problem 1**: An array of size n is given, and the range of elements in the array is from [1, n]. One element is missing in the array, and one number is repeated. The task is to find those two numbers. For example, given arr = [1, 2, 1, 3], the output should be 1 (repeated) and 4 (missing).
   ( Asked to solve above question using sum of natural numbers formula)

3. **Frontend Development**:
   - Question was based on React. They wanted me to create a button that changes to red after being clicked three times, to green after six clicks, and to another color after eight clicks, and so on.
   - Tell me about the useEffect component. And why we use it.
   - What’s the difference between ‘==’ and ‘===’.
   - There were one or two more simple javascript questions.    

`Backend Engineer`

1. **Introduction**:
   - Brief introduction and discussion of internship experience.
   - Asked about previous internships, problems encountered, solutions, and key learnings.

2. **DSA**:
   - **Problem 1**: Check if a string with `{}`, `()`, and `[]` is balanced.
     
   - **Problem 2**: Sorting Algorithms
     - Listed various sorting algorithms (Bubble Sort, Selection Sort, etc.).
     - Discussed the best sorting algorithm and its use cases.
     - Explained time complexities for sorting algorithms.

   - **Merge Sort**: Implemented and discussed time and space complexity.
     
   - **Count Number of Inversions**: 
    |- Given an array, count the number of inversions, two elements form an inversion if a[i] > a[j] for i < j.

3. **Backend Development**:
   - Discussed APIs, indexing in databases & why is it necessary, SQL vs NoSQL, HTTP methods (PUT vs Patch), and MongoDB Aggregation.
   - Project: Explained "Multi-Threaded Proxy Web Server with LRU Cache".

---

### Round 3: Technical Interview

`Frontend Engineer`

- Explanation of all my projects (Project-related questions like ‘Why did you choose this approach?’ (Why are you using Redux Toolkit?, why are you using nosql?)
- Do you know about variable hoisting? How does it happen in memory?
- What are promises, and why do we use them?
- Asked if I was familiar with terms like pagination, debouncing, lazy loading
- Component Design Discussion (lasted over 15 minutes): (he asked me to write pseudo code on notepad/vscode)
   - How would you design a component that fetches product data from a backend API and displays all the products within that component?
   - The data received is a JSON object containing products. How would you design the component to show data?
   - What other components inside that component would you create for code reusability?
   - What states would you use in each component?
   - What data would you send to these extra components you are using inside the main component, and how would you pass it?
   - How would you implement it using Redux Toolkit(more questions related to redux toolkit)?
   - How would you implement pagination if the data set is large?
- Why do we use useEffect? What is the cleanup function in useEffect, and why do we use it? I mentioned avoiding memory leaks, and then he asked, What is memory leak?
- What are middlewares?
- What is middleware chaining?
- How can we send data from one middleware to another middleware?
- Explanation of all HTTP methods
- Difference between PUT and PATCH

`Backend Engineer`

- The interviewer shared a Google Doc containing two problems, and we worked through each during the session

1. **DSA Problem**:
   - Given an array of length n and an integer Target, the goal was to print all unique subsequences whose sum equals the Target. Each element could be used an infinite number of times.
   -  Interviewer asked for the most optimized solution.

2. **Database Design Problem**:
   - Identified entities, attributes, relationships, and cardinality.
   - Created diagrams using eraser.io to explain design to the interviewer.

---

### Round 4: Managerial Round

- Conducted by the CEO to assess cultural and strategic fit for the company.
