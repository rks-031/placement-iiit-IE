export const questions = [
  {
    id: "question1",
    text: "What is the main feature of Object-Oriented Programming?",
    options: {
      a: "Procedural programming",
      b: "Data encapsulation",
      c: "Function overloading",
      d: "Sequential processing",
    },
  },
  {
    id: "question2",
    text: "Which of the following is not a core concept of OOP?",
    options: {
      a: "Inheritance",
      b: "Encapsulation",
      c: "Polymorphism",
      d: "Compilation",
    },
  },
  {
    id: "question3",
    text: "What does inheritance allow in OOP?",
    options: {
      a: "Reusing code from parent classes",
      b: "Creating multiple objects from a single class",
      c: "Hiding the implementation details",
      d: "Changing the data type of a variable",
    },
  },
  {
    id: "question4",
    text: "In OOP, what is polymorphism?",
    options: {
      a: "Multiple classes with the same name",
      b: "The ability to process objects differently based on their data type or class",
      c: "A function that calls itself",
      d: "Combining multiple methods into one",
    },
  },
  {
    id: "question5",
    text: `Janitor and Cashier classes have a print function that is similar. How can we refactor this code to reduce repetition?"
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
    \n}`,

    options: {
      a: "Replace 'self.name' with a getter method to encapsulate the member variable.",
      b: "Replace the 'print' method with a 'toString' method. Use this new method to display data to the console.",
      c: "Move the print methods from both the classes to a superclass.",
      d: "Create a 'print' function outside both classes and call that function in the print method of both classes",
    },
  },
];

export const correctAnswers = {
  question1: "b",
  question2: "d",
  question3: "a",
  question4: "b",
};
