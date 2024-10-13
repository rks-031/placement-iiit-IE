export const questions = [
  {
    id: "question1",
    text: `Q1) In a circuit, four switches labeled A, B, C, and D are connected to a logic gate arrangement to control a single output light. The switches can be either in the ON (1) or OFF (0) position. The logic circuit is defined as follows:
1. Switches A and B are inputs to an AND gate.
2. Switches C and D are inputs to an OR gate.
3. The outputs of both the AND and the OR gates are then input to an XOR (exclusive OR) gate, which controls the output light.
Which combination of switch positions (ON=1, OFF=0) will turn the output light ON?`,
    options: {
      a: "A=1, B=1, C=0, D=0",
      b: "A=0, B=1, C=1, D=1",
      c: "A=1, B=0, C=1, D=0",
      d: "A=0, B=0, C=0, D=0",
    },
  },
  {
    id: "question2",
    text: `Q2) Suppose you are given three variables X, Y, and Z. The Pearson correlation coefficients for (X, Y), (Y, Z), and (X, Z) are C1, C2, and C3 respectively.
Now, you have added 2 to all values of X (i.e., new values become X+2), subtracted 2 from all values of Y (i.e., new values are Y-2), and Z remains the same. The new coefficients for (X, Y), (Y, Z), and (X, Z) are given by D1, D2, and D3 respectively. How do the values of D1, D2, and D3 relate to C1, C2, and C3?`,
    options: {
      a: "D1 = C1, D2 < C2, D3 > C3",
      b: "D1 = C1, D2 > C2, D3 > C3",
      c: "D1 = C1, D2 > C2, D3 < C3",
      d: "D1 = C1, D2 = C2, D3 < C3",
      e: "D1 = C1, D2 = C2, D3 = C3",
    },
  },
  {
    id: "question3",
    text: "Q3) A bag contains 4 white, 5 red and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are Red is ___ ",
    options: {
      a: "2/91",
      b: "3/91",
      c: "4/91",
      d: "None of the Above",
    },
  },
  {
    id: "question4",
    text: `Q4) Mr Lewis has a number N which when divided by P, P+2, P+4 and P+9 leaves a remainder 'r' everytime.
How many such four-digit numbers exist, if P is known to be the only perfect square between 10 and 20 and the value of r is 4.`,
    options: {
      a: "2",
      b: "3",
      c: "4",
      d: "5",
    },
  },
  {
    id: "question5",
    text: "Q5) What is the total number of possible outcomes when 3 coins are tossed simultaneosly?",
    options: {
      a: "5",
      b: "7",
      c: "8",
      d: "16",
    },
  },
  {
    id: "question6",
    text: `Q6) Three men (Tom, Peter and Jack) and three women (Eliza, Anne and Karen) are spending a few months at a hillside. They are to stay in a row of nine cottages, each one living in his or her own cottage. There are no others staying in the same row of houses.
Anne, Tom, and Jack do not want to stay in any cottage which is at the end of the row.
Eliza and Anne are unwilling to stay besides any occupied cottage.
Karen is next to Peter and Jack.
Between Anne and Jack's cottage, there is just one vacant house.
None of the girls occupy adjacent cottages.
The house occupied by Tom is next to an end cottage.
Which among these statement(s) is true?

(i) Anne is between Eliza and Jack
(ii) At the most four persons can have occupied cottages on either side of them.
(iii) Tom stays beside Peter.`,
    options: {
      a: "I only",
      b: "II only",
      c: "I and III only",
      d: "II and III only",
      e: "I, II and III",
    },
  },
];

export const correctAnswers = {
  question1: "not answered yet",
  question2: "not answered yet",
  question3: "not answered yet",
  question4: "not answered yet",
  question5: "c",
  question6: "not answered yet",
};
