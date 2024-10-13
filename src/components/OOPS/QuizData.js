export const questions = [
  {
    id: "question1",
    text: "Q1) What is the main feature of Object-Oriented Programming?",
    options: {
      a: "Procedural programming",
      b: "Data encapsulation",
      c: "Function overloading",
      d: "Sequential processing",
    },
  },
  {
    id: "question2",
    text: "Q2) Which of the following is not a core concept of OOP?",
    options: {
      a: "Inheritance",
      b: "Encapsulation",
      c: "Polymorphism",
      d: "Compilation",
    },
  },
  {
    id: "question3",
    text: "Q3) What does inheritance allow in OOP?",
    options: {
      a: "Reusing code from parent classes",
      b: "Creating multiple objects from a single class",
      c: "Hiding the implementation details",
      d: "Changing the data type of a variable",
    },
  },
  {
    id: "question4",
    text: "Q4) In OOP, what is polymorphism?",
    options: {
      a: "Multiple classes with the same name",
      b: "The ability to process objects differently based on their data type or class",
      c: "A function that calls itself",
      d: "Combining multiple methods into one",
    },
  },
  {
    id: "question5",
    text: `Q5) Janitor and Cashier classes have a print function that is similar. How can we refactor this code to reduce repetition?"
    \nclass Janitor {
      \n\t...
      \n\tprint() {
      \n\tconsole.log("Employee Name: " + self.name)
      \n\t}
      \n\t}
      \n\tclass Cashier {
      \n\t...
      \n\tprint(){
      \n\tconsole.log("Employee Name: " + self.name)
      \n\t}
      \n\t}
    \n}`
      
    ,
    options: {
      a: "Replace 'self.name' with a getter method to encapsulate the member variable.",
      b: "Replace the 'print' method with a 'toString' method. Use this new method to display data to the console.",
      c: "Move the print methods from both the classes to a superclass.",
      d: "Create a 'print' function outside both classes and call that function in the print method of both classes",
    },
  },
  {
    id: "question6",
    text: "Q6) The operator that cannot be overloaded?",
    options: {
      a: "Scope Operator (::)",
      b: "Sizeof Operator",
      c: "Ternary Operator",
      d: "Member Selector (.)",
      e: "All of above",
    },
  },
  {
    id: "question7",
    text: `Q7) You are given following statements regarding INTERFACES in OOPs
    \nAnalyze the statements and select those that are True`,
    options: {
      a: "Only signatures of methods are present in an inteface",
      b: "Interfaces are defined abstract classes",
      c: "Interface defination ontains all whole method defination inside it",
      d: "Both choice 1 and choice 2",
      e: "Both choice 2 and choice 3",
    },
  },
  {
    id: "question8",
    text: `Q8) What will the program print?
    \nclass Program
  {
    static void Main(string[] args)
    {
        int i = 5;
        int j;
        method1(ref i);
        method2(out j);
        Console.WriteLine(i + " " + j);
    }

    static void method1(ref int x)
    {
        x = x + x;
    }

    static void method2(out int x)
    {
        x = 6;
        x = x * x;
    }
  } `,
    options: {
      a: "10 , 36",
      b: "36 , 10",
      c: "I30, 16",
      d: "16 , 30",
    },
  },
];

export const correctAnswers = {
  question1: "b",
  question2: "d",
  question3: "a",
  question4: "b",
  question5: "Not answered yet",
  question6: "e",
  question7: "d",
  question8: "a",
};
