export const questions = [
  {
    id: "question1",
    text: "Q1) What is the main feature of OOPs?",
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
    text: `Q5) Janitor and Cashier classes have a print function that is similar. 
How can we refactor this code to reduce repetition?

class Janitor {
  ...
  print() {
    console.log("Employee Name: " + this.name);
  }
}

class Cashier {
  ...
  print() {
    console.log("Employee Name: " + this.name);
  }
}`,
    options: {
      a: "Replace 'this.name' with a getter method to encapsulate the member variable.",
      b: "Replace the 'print' method with a 'toString' method and use it to display data.",
      c: "Move the print methods to a superclass.",
      d: "Create a 'print' function outside both classes and call it within their methods.",
    },
  },
  {
    id: "question6",
    text: "Q6) Which operator cannot be overloaded?",
    options: {
      a: "Scope Operator (::)",
      b: "Sizeof Operator",
      c: "Ternary Operator",
      d: "Member Selector (.)",
      e: "All of the above",
    },
  },
  {
    id: "question7",
    text: `Q7) You are given the following statements about INTERFACES in OOP.
Analyze them and select the true ones:`,
    options: {
      a: "Only method signatures are present in an interface.",
      b: "Interfaces are defined as abstract classes.",
      c: "Interface definitions contain complete method implementations.",
      d: "Both options a and b.",
      e: "Both options b and c.",
    },
  },
  {
    id: "question8",
    text: `Q8) What will the program print?

class Program {
  static void Main(string[] args) {
    int i = 5;
    int j;
    method1(ref i);
    method2(out j);
    Console.WriteLine(i + " " + j);
  }

  static void method1(ref int x) {
    x = x + x;
  }

  static void method2(out int x) {
    x = 6;
    x = x * x;
  }
}`,
    options: {
      a: "10, 36",
      b: "36, 10",
      c: "30, 16",
      d: "16, 30",
    },
  },
  {
    id: "question9",
    text: `Q9) How many copies of a constructor function are created for a class in a 
    typical object-oriented programming language?`,
    options: {
      a: "One per method call",
      b: "One per instance of the class",
      c: "One per class definition",
      d: "None of the above",
    },
  },
  {
    id: "question10",
    text: `Q10) The concept of many functions with same name is known as?`,
    options: {
      a: "Function Overriding",
      b: "Operator Overloading",
      c: "Function Overloading",
      d: "Function _______________",
    },
  },
  {
    id: "question11",
    text: `Q11) A copy constructor is called`,
    options: {
      a: "when an object is passed by value as an argument",
      b: "when an object is returned by value",
      c: "when compiler generates a temporary object",
      d: "all the above",
    },
  },
  {
    id: "question12",
    text: `Q12) Which of the following is not a type of inheritance?`,
    options: {
      a: "Multilevel",
      b: "Multiple",
      c: "Distributive",
      d: "Hierarchical",
    },
  },
  {
    id: "question13",
    text: `Q13) How many instances of an abstract class can be created?`,
    options: {
      a: "As many as required",
      b: "Zero",
      c: "As many as initialised",
      d: "One",
    },
  },
  {
    id: "question14",
    text: `Q14) Which of the following ways are correct to comment out preprocessing of any line?`,
    options: {
      a: "'#include<stdio.h>'",
      b: "##include<stdio.h>",
      c: "// #include<stdio.h>",
      d: "--#include<stdio.h>",
    },
  },
  {
    id: "question15",
    text: `Q15) Is it possible to run a program without main() function?`,
    options: {
      a: "No",
      b: "Yes",
    },
  },
  {
    id: "question16",
    text: `Q16) What happens if you place a comment using // in the middle of a preprocessing directive like #include as #inclu//de?`,
    options: {
      a: "The entire line is treated as a comment.",
      b: "The comment is ignored, but the directive is processed.",
      c: "Compilation will result in an error.",
      d: "The directive is ignored during compilation.",
    },
  },
  {
    id: "question17",
    text: `Q17) How many abstract methods should an abstract class have?`,
    options: {
      a: "Three",
      b: "Two",
      c: "One",
      d: "Zero",
    },
  }
];

export const correctAnswers = {
  question1: "b",
  question2: "d",
  question3: "a",
  question4: "b",
  question5: "c",
  question6: "e",
  question7: "d",
  question8: "a",
  question9: "d",
  question10: "c",
  question11: "d",
  question12: "c",
  question13: "b",
  question14: "c",
  question15: "b",
  question16: "c",
  question17: "c",
};
