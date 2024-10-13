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
};
