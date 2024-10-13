export const questions = [
    {
      id: "question1",
      text: `Q1) The SQL statement
      \nSELECT ROUND(45.926, -2) FROM DUAL;`,
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
      \nSelect all that apply.
      \nPick ONE option`,
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
      \n Pick ONE option.`,
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
        \n Pick ONE option.`,
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
        \n Pick ONE option.`,
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
        \nYou are tasked with writing a SQL query to find employees who are present in both the 'Sales' department and the 'Marketing' department but are not part of the 'Management' role.
        \nWhich of the following SQL queries accomplishes this task?
        \n Pick ONE option.`,
        options: {
          a: "\nSELECT emp_id, emp_name\nFROM employees\nWHERE emp_department = 'Sales' AND emp_department = 'Marketing' AND emp_role <> 'Management' ",
          b: "\nSELECT emp_id, emp_name\nFROM employees\nWHERE emp_department IN ('Sales','Marketing') AND emp_role <> 'Management' ",
          c: "\nSELECT emp_id, emp_name\nFROM employees\nWHERE emp_department = 'Sales' OR emp_department = 'Marketing' AND emp_role <> 'Management' ",
          d: "\nSELECT emp_id, emp_name\nFROM employees\nWHERE emp_department = 'Sales' INTERSECT \nSELECT emp_id, emp_name\nFROM employees\nWHERE emp_department = 'Marketing' AND emp_role <> 'Management'  ",
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
  };
  