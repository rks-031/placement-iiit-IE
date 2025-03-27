# Interviews-at-IIIT

## Project Overview
It is a comprehensive online portal to help students at IIIT-Bh ace their upcoming interviews.
This portal combines interview experiences, online assessment practice, placement study resources, resume writing guidance, cover letter templates, and referral formats, all designed to support comprehensive career preparation.

## Need of the project
There wasn’t any centralized portal available at the institute where students can learn about the placement procedures, what kind of questions are asked in the interview in the companies that visit/have been visiting our campus for recruitment, what are the resources to follow for the all-round preparation before their upcoming interview. 

## Functionalities of the project:
1. The website can only be accessed by users having a Google account under the IIIT domain.
2. Interview Experiences of all the placed students in different organizations available.
3. A dedicated quiz environment for the MCQ and coding rounds for preparation of the Online Assessments.
4. A separate section where students can find how to build and tailor an efficient ATS friendly resume, what’s the format of crafting a cover letter (generally required when applying off-campus), article on what’s the right approach to reach out for referral if willing to apply for a company and want a referral from an existing employee in the particular organization, and an entire store of right resources required to master the topics like CS fundamentals, Data Structures, and System Design.

## Technologies, tools, and methodologies used in the project:
I wanted to build a portal which must be highly optimized, should be minimalistic and purpose specific, and appealing to the students. For this I went ahead with some of the most popular technologies to build this project which are:

- Docusaurus (built on top of React): The main reason for choosing this is Docusaurus supports Markdown and MDX (which lets us use React JSX in our markdown content).

- Javascript: To prepare the separate components for Coding, OS, DSA, SQ, etc.  online assessment quizzes and add separate data files for all of them which contain the questions and the correct answers.

- Firebase with AuthContext: To integrate Google OAuth in the website so that only those users can login the website who have their Google account under the IIIT domain to maintain integrity.

- CSS and media queries: To give the website a visually appealing look and make it responsive so that it becomes compatible for all screen sizes.

- Markdown: A good knowledge of working with markdown files was required because most of the content on the website is coded in the .md files.

- GitHub: Used as version control system for smooth CI/CD and enhanced collaboration at a common codespace.

- Vercel: To deploy the entire website and make it global so that it can be integrated on the official placement portal of the college.

![image](https://github.com/user-attachments/assets/0e85f698-ccd1-470c-8810-94e8a76af342)

![image](https://github.com/user-attachments/assets/7849d9a8-2fdb-4c42-9e1f-af1bf9abc5fd)

**Google SEO Score of the website**: 100 [https://www.seoreviewtools.com/]

![SEO score](https://github.com/user-attachments/assets/6b498c0b-f5e7-4af3-a9b3-ae67848a1517)

## Working with the repository

1. &nbsp;Clone the repository

```bash
    git clone https://github.com/rks-031/placement-iiit-IE.git
```

2. &nbsp;Install the dependency

```bash
    npm install
```

3. &nbsp; Stat the local UI server

```bash
    npm start
```

## Project Maintainers
`Rajnish Kumar Singh` <br/>
`Md. Haris` <br/>
`Krishna Kalra` <br/>
`Souharda Roy`
