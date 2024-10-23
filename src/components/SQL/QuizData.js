export const questions = [
  {
    id: "question1",
    text: `Q1) The SQL statement:
SELECT ROUND(45.926, -2) FROM DUAL;`,
    options: {
      a: "Is illegal",
      b: "prints garbage",
      c: "prints 45.92",
      d: "prints 0",
    },
  },
  {
    id: "question2",
    text: "Q2) Choose the expresiion that returns 0",
    options: {
      a: "SELECT '0' = 0",
      b: "SELECT 0 IS FALSE",
      c: "SELECT '0' IS FALSE",
      d: "SELECT STRCMP('0',0)",
    },
  },
  {
    id: "question3",
    text: `Q3) Which MySQL join type returns records that have matching values in both tables
Select all that apply.
Pick ONE option`,
    options: {
      a: "OUTER JOIN",
      b: "INNER JOIN",
      c: "CROSS JOIN",
      d: "FULL JOIN",
    },
  },
  {
    id: "question4",
    text: `Q4) Which expression is not correct?
Pick ONE option.`,
    options: {
      a: "The EXPLAIN statement works with SELECT, DELETE, INSERT, REPLACE, UPDATE and ALTER statements",
      b: "The EXPLAIN statement is useful for examining queries that include partitioned tables",
      c: "The EXPLAIN statement can display information in both traditional tabular format and JSON format",
      d: "None of the above, All expressions are corect",
    },
  },
  {
    id: "question5",
    text: `Q5) Which SQL constraint do we use to set some value to a field whose value has not been added explicitly?
Pick ONE option.`,
    options: {
      a: "NOT NULL",
      b: "DEFAULT",
      c: "CHECK",
      d: "UNIQUE",
    },
  },
  {
    id: "question6",
    text: `Q6) Truncate table is classified as?
Pick ONE option.`,
    options: {
      a: "Data Defination Language",
      b: "Data Manipulation Language",
      c: "Data Control Language",
      d: "Transaction Control Language",
    },
  },
  {
    id: "question7",
    text: `Q7) Consider a database table named "Employees" that stores information about employees in an organization. The table has the following columns: "emp_id" (employee ID), "emp_name" (employee name), "emp_department" (employee department), and "emp_role" (employee role). 
You are tasked with writing a SQL query to find employees who are present in both the 'Sales' department and the 'Marketing' department but are not part of the 'Management' role.
Which of the following SQL queries accomplishes this task?
Pick ONE option.`,
    options: {
      a: `
SELECT emp_id, emp_name
FROM employees
WHERE emp_department = 'Sales' AND emp_department = 'Marketing' AND emp_role <> 'Management'`,
      b: `
SELECT emp_id, emp_name
FROM employees
WHERE emp_department IN ('Sales','Marketing') AND emp_role <> 'Management'`,
      c: `
SELECT emp_id, emp_name
FROM employees
WHERE emp_department = 'Sales' OR emp_department = 'Marketing' AND emp_role <> 'Management'`,
      d: `
SELECT emp_id, emp_name
FROM employees
WHERE emp_department = 'Sales' INTERSECT 
SELECT emp_id, emp_name
FROM employees
WHERE emp_department = 'Marketing' AND emp_role <> 'Management'`,
    },
  },
  {
    id: "question8",
    text:`Q8) With SQL, how can you insert a new record into the "Persons" table?`,
    options: {
      a: `INSERT INTO Persons VALUES ('Jimmy', 'Jackson')`,
      b: `INSERT ('Jimmy', 'Jackson') INTO Persons`,
      c: `INSERT VALUES ('Jimmy', 'Jackson') INTO Persons`
    }
  },
  {
    id: "question9",
    text:`Q9) In SQL, which clause is used to filter rows before grouping and which clause is used to filter groups after aggregation?`,
    options: {
      a: `WHERE filters rows before aggregation, and HAVING filters groups after aggregation.`,
      b: `HAVING filters rows before aggregation, and WHERE filters groups after aggregation.`,
      c: `HAVING and WHERE are interchangeable and can be used to filter rows at any stage.`,
      d: `WHERE filters all rows in the result set, including those grouped by GROUP BY.`
    }
  },
  {
    id: "question10",
    text:`Q10) Which one of these is not a Database System Type?`,
    options: {
      a: `Relational`,
      b: `Network`,
      c: `MySQL`,
      d: `Hierarchical`
    }
  },
  {
    id: "question11",
    text: `Q11) Observe the following query and choose the correct option: SELECT DISTINCT name FROM student WHERE ID IS NOT NULL;`,
    options: {
      a: "The query gives all the possible student names where a finite value exists for ID",
      b: "The query gives the names of the students that have a null ID and it also excludes identical names",
      c: "The query is syntactically wrong",
      d: "The query gives the student names where a finite value exists for ID and it excludes identical names",
    },
  },
];

export const correctAnswers = {
  question1: "d",
  question2: "d",
  question3: "b",
  question4: "d",
  question5: "b",
  question6: "a",
  question7: "d",
  question8: "a",
  question9: "a",
  question10: "c",
  question11: 'd'
};
