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
  {
    id: "question7",
    text: "Q7) What number logically replaces (?)",
    img: "/img/logical1.png",
    options: {
      a: "60",
      b: "62",
      c: "53",
      d: "57",
    },
  },
  {
    id: "question8",
    text: `Q8) Number represent by y in the below equation
    (1101)₂ = (У)₃`,
    options: {
      a: "120",
      b: "101",
      c: "102",
      d: "111",
    },
  },
  {
    id: "question9",
    text: `Q9) In a company, 26 employees are in the HR department, 32 are in the technical department, and 30 are in the management department. Of these, 5 employees are in all three departments, while 37 are in only one of them. How many employees like only two of the three departments?`,
    options: {
      a: "36",
      b: "18",
      c: "88",
      d: "27",
    },
  },
  {
    id: "question10",
    text: "Q10) In a certain coding system 'MANAGEMENT' is coded as 1232451536. How will you code 'GATE'?",
    options: {
      a: "4652",
      b: "5213",
      c: "2365",
      d: "4265",
      e: "4132",
    },
  },
  {
    id: "question11",
    text: "Q11) In a certain system 'RANGER' is coded as 'REGNAR'. How will you code 'TABLE'?",
    options: {
      a: "TABLE",
      b: "ELBAT",
      c: "TELBET",
      d: "TELBA",
      e: "EBATL",
    },
  },
  {
    id: "question12",
    text: "Q12) In a certain coding system '6743' is coded as 'FGDC'. How will you code '97285'?",
    options: {
      a: "IGBHE",
      b: "RTYSV",
      c: "GVSTU",
      d: "IHCIF",
      e: "HCSIF",
    },
  },
  {
    id: "question13",
    text: "Q13) Choose the most logical option: If all fans are coolers and all fans are air conditioners, then no cooler is an air conditioner.",
    options: {
      a: "is always true",
      b: "is always false",
      c: "may or may not be true",
    },
  },
  {
    id: "question14",
    text: "Q14) Read the statement and choose which of the assumptions are implied. Rajiv's father instructed him to not return home if it snows heavily. 1. Rajiv may not be able to decide himself if it snows. 2. No public transport will ply if it snows heavily.",
    options: {
      a: "if only assumption 1 is implicit",
      b: "if only assumption 2 is implicit",
      c: "if either 1 or 2 is implicit",
      d: "if neither 1 nor 2 is implicit",
      e: "if both 1 and 2 are implicit",
    },
  },
  {
    id: "question15",
    text: "Q15) Read the statement and choose which of the assumptions are implied. If the rainfall is not adequate during these monsoons the farmers will not be able to pay back their loans. 1. Adequate rainfall is essential for agriculture. 2. Most farmers are dependent on rainfall or irrigation.",
    options: {
      a: "if only assumption 1 is implicit",
      b: "if only assumption 2 is implicit",
      c: "if either 1 or 2 is implicit",
      d: "if neither 1 nor 2 is implicit",
      e: "if both 1 and 2 are implicit",
    },
  },
  {
    id: "question16",
    text: "Q16) Choose the word that best completes the comparison: colt:stallion::joey:_______",
    options: {
      a: "kangaroo",
      b: "ostrich",
      c: "koala",
    },
  },
  {
    id: "question17",
    text: "Q17) The problem below consists of a question and two statements numbered I and II given below it. You have to decide whether the data provided in the statements is sufficient to answer the question. Read both the statements and give the answer. How many children are there in the group? I. Sangita has scored more marks than 12 children in the group. II. Reena has scored less than Sangita.",
    options: {
      a: "Statement i alone is sufficient",
      b: "Statement ii alone is sufficient",
      c: "Statements i and ii together are sufficient",
      d: "Either of the statements i or ii alone is sufficient",
      e: "Statements i and ii together also are not sufficient",
    },
  },
  {
    id: "question18",
    text: "Q18) In a certain coding system 'TEN' is coded as 256 and 'SIXTY' is coded as 19827. How will you code 'SIXTEEN'?",
    options: {
      a: "1965255",
      b: "1963225",
      c: "1982556",
      d: "1963556",
      e: "1985562",
    },
  },
  {
    id: "question19",
    text: "Q19) Read the statement and choose which of the assumptions are implied. The procession will leave at 6pm but people can directly reach the ceremony venue. You can reach till 8 pm, it will not be an issue. 1. The ceremony will start at 8 pm. 2. The ceremony will not start till the procession reaches the venue.",
    options: {
      a: "if only assumption 1 is implicit",
      b: "if only assumption 2 is implicit",
      c: "if either 1 or 2 is implicit",
      d: "if neither 1 nor 2 is implicit",
      e: "if both 1 and 2 are implicit",
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
  question7: "not answered yet",
  question8: "d",
  question9: "not answered yet",
  question10: "not answered yet",
  question12: "not answered yet",
  question13: "not answered yet",
  question14: "not answered yet",
  question15: "not answered yet",
  question16: "not answered yet",
  question17: "not answered yet",
  question18: "not answered yet",
  question19: "not answered yet",
};
