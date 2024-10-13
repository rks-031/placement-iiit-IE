import dsaImg1 from "./dsa_img1.png";
export const questions = [
  {
    id: "question1",
    text: "Q1) In the context of Dynamic Programming, what is “memoization”?",
    options: {
      a: "Writing an algorithm in a memo to remember it.",
      b: "Recomputation of subproblems for accuracy.",
      c: "Storing solutions to avoid recomputation.",
      d: "Optimizing a problem by breaking it into subproblems and solving iteratively.",
    },
  },
  {
    id: "question2",
    text: "Q2) Which data structure is used for implementing recursion?",
    options: {
      a: "Stack",
      b: "Queue",
      c: "Array",
      d: "Linked List",
    },
  },
  {
    id: "question3",
    text: "Q3) What is the time complexity of quicksort in the average case?",
    options: {
      a: "O(n)",
      b: "O(n log n)",
      c: "O(n^2)",
      d: "O(log n)",
    },
  },
  {
    id: "question4",
    text: "Q4 )Unordered map is built over",
    options: {
      a: "Red Black trees",
      b: "Binary trees",
      c: "Segment trees",
      d: "Heaps",
    },
  },
  {
    id: "question5",
    text: "Q5) A certain program must store the names of all the people who finish the City Marathon. The names are entered by an official at the finish line as the competitor’s finish. After the race is over the program must print a list only containing the names of competitors who placed 1 to 10 and then 100, 200, 300 and so on, as these competitors will receive a special medallion. Which data structure would be the best choice for this program?",
    options: {
      a: "A vector or resizable array",
      b: "A map (implemented as a binary tree of key/value pairs)",
      c: "A singly linked list",
      d: "A hash set (implemented as a hash table of keys)",
    },
  },
  {
    id: "question6",
    text: "Q6) Which data structure is best suited for implementing a priority queue",
    options: {
      a: "Array",
      b: "Stack",
      c: "Heap",
      d: "Linked List",
    },
  },
  {
    id: "question7",
    text: "Q7) Sam has a list of integers : 23, 7, 9, 10, 87, 34, 45. He has 4 linked lists: 1 singly linked list, 1 circular singly linked list, 1 doubly linked list, 1 circular doubly linked list, and a pointer pointing towards the first node of the list. If he wants to insert a node between 34 and 45, then which list will be the best (less traversing) to use?",
    options: {
      a: "Singly Linked List",
      b: "Linked List",
      c: "Doubly Linked List",
      d: "Circular Double Linked List",
    },
  },
  {
    id: "question8",
    text: `Q8) What would be the linked list (singly) for the following function?
    \nvoid f(Node* head) {
      \n\tif(head == NULL) return;
      \n\tif(head -> next) cout << head->next->val << " ";
      \n\telse cout << "null";
      \n\tcout << head -> val << " ";
      \n\tf(head -> next);
    \n}
    \nIf the output is 2 1 3 2 4 3 5 4 3 5 null 3`,
    options: {
      a: "[2,1,3,2,4,3,5,4,3,5,null]",
      b: "[3,5,4,3,2,1,null]",
      c: "[2,1,4,3,3,5,null]",
      d: "[1,2,3,4,5,3,null]",
    },
  },
  {
    id: "question9",
    text: `Q9) A good pair is two adjacent integers whose sum is even. Which of the following arrangements of arr[N] produce(s) the maximum number of good pairs that is possible?
      \narr[8] = {10, 9, 13 15 3 16,9 13}
      \nPick one or more options`,
    options: {
      a: "{10 13 9 16 15 3 9 13}",
      b: "{13 9 13 15 3 9 16 10}",
      c: "{13 9 13 3 9 16 15 10}",
      d: "{13 9 9 13 15 3 10 16}",
    },
  },
  {
    id: "question10",
    text: `Q10) What will be the output of the following code:
      \nINTEGER n;
      \nn = 100;
      \nQUEUE q; 
      \nwhile (n> 0) 
      \n\tq.push(n% 3)
      \n\tn/= 3
      \nwhile (q.size()) 
      \n\tPRINT q. front() 
      \n\tq.pop()`,
    options: {
      a: "10201",
      b: "20102",
      c: "10121",
      d: "10102",
    },
  },
  {
    id: "question11",
    text: `Q11) An array of 8 elements was sorted using some sorting algorithm. The algorithm found the largest number first. After 4 iterations, the array is [2,4,5,7,8,1,3,6]
      \nWhich statement is True?`,
    options: {
      a: "The algorithm is neither merge sort nor insertion sort",
      b: "The algorithm may be insertion sort but is not merge sort",
      c: "The algorithm may be merge sort but not insertion sort",
      d: "The algorithm is selection sort",
      e: "None",
    },
  },
  {
    id: "question12",
    text: `Q12) What will be the output of the following code:
      \nINTEGER n;
      \nn = 100;
      \nSTACK s; 
      \nwhile (n> 0) 
      \n\ts.push(n%2 == 0)
      \n\tn = n/2
      \nwhile (!s.empty()) 
      \n\tPRINT s.pop() `,
    options: {
      a: "1100100",
      b: "0011011",
      c: "1111011",
      d: "0000100",
    },
  },
  {
    id: "question13",
    text: `Q13) Tail Recursion
    \nPick one option `,
    options: {
      a: "Occurs when the recursive call is the last statement executed in a recursive procedure or function",
      b: "Is a path that includes a recursive call to the routine, to solve a smaller version of the original problem",
      c: "Is a structure that keeps track of the activation records at run time in order to preserve the value of parameters, return addresses .registers and so no",
      d: "Refers to the point in the compile/execution cycle when variable names are associated with addresses in memory",
    },
  },
  {
    id: "question14",
    text: `Q14) Consider the following C code snippet:
      \n#include <stdio.h>
      \nint main()
      \n{
      \n\tchar *p = "abc";
      \n\tchar *q= "abc123";
      \n\twhile (*p=*q) {
      \n\t\tprintf("%c %c", *p, *q);
      \n\t}
      \n\treturn 0;
      \n}
      \nWhat will our code print when we run the code? `,
    options: {
      a: "\naa\nbb\ncc",
      b: "aa",
      c: "bb",
      d: "Compilation Error",
      e: "Segmentation Fault",
    },
  },
  {
    id: "question15",
    text: `Q15) Given array = [76, 97, 25, 115, 83, 51, 18, 36]. The array is sorted using the quick sort algorithm with the first element as the pivot element. After applying the partition algorithm, what is the index of the pivot element if indexing starts at 1?
    \nPick one option `,
    options: {
      a: "1",
      b: "3",
      c: "5",
      d: "4",
    },
  },
  {
    id: "question16",
    text: `Q16) The average time required to perform a successful sequential search for an element in an array A containing n elements is given by
    \nPick one option `,
    options: {
      a: "(n+1)/2",
      b: "log2n",
      c: "n(n+1)/2",
      d: "n^2",
    },
  },
  {
    id: "question17",
    text: `Q17) This is a number game. In one turn, a player selects any two numbers, x, and y. The other player then must reduce the two numbers to zero using the following operations or the player loses. The operations are performed in any combination as many times as necessary.
    \nOperations:
    \nDecrease x by 1 and y by 2: x=x-1 and y=y-2
    \nDecrease x by 2 and y by 1: x=x-2 and y=y-1
    \nWhat is the strategy to use in selecting the two values in order to force the opponent to lose?
    \nPick ONE option `,
    options: {
      a: "x-y=0 and (x + y) is divisible by 2",
      b: "(x + y) is divisible by 3, 2y <x",
      c: "(x+y) is divisible by 3, 2x >y, and x > y",
      d: "x+y)is divisible by 3 and x>y",
    },
  },
  {
    id: "question18",
    text: `Q18) What will the following code do?
    \npublic void fun (Node a)
    \n{
    \n\tif(size == 0)
    \n\t\thead = a;
    \n\telse
    \n\t{
    \n\tNode t, inst;
    \n\tfor (inst = head; (t = inst.getNext())!=null; inst = t);
    \n\tinst.setNext(a);
    \n\t}
    \n\tsize++;
    \n}
    \nPick ONE option `,
    options: {
      a: "Insert a node at the beginning of the list",
      b: "Delete a node at the beginning of the list",
      c: "Insert a node at the end of the list",
      d: "Delete a node at the end of the list",
    },
  },
  {
    id: "question19",
    text: `Q19) In the following postfix expression what are the values of the top and bottom of the stack before the second * operation is performed?
    \n6 3 2 * / 3 2 1 * - +
    \nPick ONE option `,
    options: {
      a: "1,1",
      b: "6,1",
      c: "1,2",
      d: "3,1",
    },
  },
  {
    id: "question20",
    text: `Q20) An articulation point, also known as a "separating vertex", is one whose removal increases the number of connected components in a graph. How many articulation points are in the graph shown?
    <img src="${dsaImg1}" alt="Graph Image" style="max-width: 100%; height: auto;"> `,
    options: {
      a: "1,1",
      b: "6,1",
      c: "1,2",
      d: "3,1",
    },
  },
];

export const correctAnswers = {
  question1: "c",
  question2: "a",
  question3: "b",
  question4: "a",
  question5: "a",
  question6: "c",
  question7: "d",
  question8: "not answered yet",
  question9: "not answered yet",
  question10: "a",
  question11: "not answered yet",
  question12: "b",
  question13: "a",
  question14: "not answered yet",
  question15: "not answered yet",
  question16: "a",
  question17: "not answered yet",
  question18: "not answered yet",
  question19: "not answered yet",
  question20: "not answered yet",
};
