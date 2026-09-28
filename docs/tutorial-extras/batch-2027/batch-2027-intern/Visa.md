# Visa Interview Experience

**Company**: Visa  
**Position**: Software Engineering Intern

---

## Hiring Process

The hiring process comprised two main stages: an initial coding assessment followed by a technical interview. Both assessments were conducted remotely.

### Stage 1: General Coding Assessment

**Assessment Details:**
- **Duration**: 70 minutes
- **Date**: December 14, 2025
- **Format**: Remote at Home
- **Number of Questions**: 4 DSA-based problems

**Problem Breakdown:**

1. **First Two Questions**: Elementary DSA problems (specific details not retained)

2. **Third Question - Graph Problem**: This problem involved manipulating a grid-based graph structure. The task required identifying and removing nodes when two or more adjacent nodes shared the same type, followed by applying gravity-based physics to reorganize remaining elements. The logic was analogous to match-three game mechanics (similar to Candy Crush).

3. **Fourth Question - Sawtooth Array Pattern**: Given an array, the objective was to count the total number of subarrays that exhibited a sawtooth pattern, defined as alternating odd-even-odd sequences.  

### Stage 2: Technical Interview

**Interview Details:**
- **Duration**: 45 minutes
- **Date**: January 13, 2026
- **Format**: Remotely at TPO

**Interview Structure:**

**Introduction Phase (Approximately 20 minutes):**
The interview commenced with a comprehensive introduction where I presented an overview of my projects. The discussion progressed into broader technical and professional topics, including caching mechanisms and some casual engineering curriculum design.

**Coding Assessment Phase:**
The technical evaluation involved a string manipulation problem with number-theoretic applications, presented via CodeSignal.

**Problem Statement:**

Given two input strings `s` and `t`, determine the minimal string `g` that serves as a common divisor for both strings. String division is defined such that if string `t` divides string `s` (denoted as `t | s`), then `s` can be expressed as a concatenation of multiple instances of `t`.
**Examples:**

| # |  s |  t |  g |
|------|---------|---------|----------|
| 1 | "ababab" | "abab" | "ab" |
| 2 | "ababab" | "xyz" | "" |
| 3 | "ababab" | "ababababababab" | "ab" |

**Solution Approach:**

*Initial Strategy:* I hypothesized that `g` must be the string corresponding to the GCD of the lengths of `s` and `t`, combined with a condition that `s + t` must equal `t + s` to verify that both strings share a common divisor. This approach proved incorrect due to the failure to identify the primitive root of the strings.

*Revised Strategy:* I subsequently implemented a brute-force algorithm to compute the primitive root, which successfully produced correct results. While the interviewer noted that this solution could have been optimized further, it was ultimately accepted.

**Additional Notes:**
No behavioral questions or core domain-specific questions were posed during this interview round.

---

[Click to read interview experiences of other candidates who were interviewed for Visa from 2027 batch](https://drive.google.com/drive/folders/1KQv6yHcWWhw_3edaw_kE3Aw-841Az3_R?usp=drive_link)

---