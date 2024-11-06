export const questions = [
  {
    id: "question1",
    text: "Q1) In the context of Dynamic Programming, what is 'memorization'?",
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
    text: "Q4)Unordered map is built over",
    options: {
      a: "Red Black trees",
      b: "Binary trees",
      c: "Segment trees",
      d: "Heaps",
    },
  },
  {
    id: "question5",
    text: "Q5) A certain program must store the names of all the people who finish the City Marathon. The names are entered by an official at the finish line as the competitor's finish. After the race is over the program must print a list only containing the names of competitors who placed 1 to 10 and then 100, 200, 300 and so on, as these competitors will receive a special medallion. Which data structure would be the best choice for this program?",
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
void f(Node* head) {
  if (head == NULL) return;
  if (head->next) cout << head->next->val << " ";
  else cout << "null ";
  cout << head->val << " ";
  f(head->next);
}
If the output is 2 1 3 2 4 3 5 4 null 3`,
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
arr[8] = {10, 9, 13 15 3 16,9 13}
Pick one or more options`,
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
INTEGER n;
n = 100;
QUEUE q; 
while (n > 0) 
  q.push(n % 3)
  n /= 3
while (q.size()) 
  PRINT q.front() 
  q.pop()`,
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
Which statement is True?`,
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
INTEGER n;
n = 100;
STACK s; 
while (n > 0) 
  s.push(n % 2 == 0)
  n = n / 2
while (!s.empty()) 
  PRINT s.pop()`,
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
Pick one option`,
    options: {
      a: "Occurs when the recursive call is the last statement executed in a recursive procedure or function",
      b: "Is a path that includes a recursive call to the routine, to solve a smaller version of the original problem",
      c: "Is a structure that keeps track of the activation records at run time in order to preserve the value of parameters, return addresses .registers and so no",
      d: "Refers to the point in the compile/execution cycle when variable names are associated with addresses in memory",
    },
  },
  {
    id: "question14",
    text: `Q14) Consider the following C code snippet:
#include <stdio.h>
int main()
{
  char *p = "abc";
  char *q = "abc123";
  while (*p = *q) {
    printf("%c %c", *p, *q);
  }
  return 0;
}
What will our code print when we run the code?`,
    options: {
      a: "aa\nbb\ncc",
      b: "aa",
      c: "bb",
      d: "Compilation Error",
      e: "Segmentation Fault",
    },
  },
  {
    id: "question15",
    text: `Q15) Given array = [76, 97, 25, 115, 83, 51, 18, 36]. The array is sorted using the quick sort algorithm with the first element as the pivot element. After applying the partition algorithm, what is the index of the pivot element if indexing starts at 1?
Pick one option`,
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
Pick one option`,
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
Operations:
Decrease x by 1 and y by 2: x=x-1 and y=y-2
Decrease x by 2 and y by 1: x=x-2 and y=y-1
What is the strategy to use in selecting the two values in order to force the opponent to lose?
Pick ONE option`,
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
public void fun (Node a)
{
  if(size == 0)
    head = a;
  else
  {
    Node t, inst;
    for (inst = head; (t = inst.getNext())!=null; inst = t);
    inst.setNext(a);
  }
  size++;
}
Pick ONE option`,
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
6 3 2 * / 3 2 1 * - +
Pick ONE option`,
    options: {
      a: "1,1",
      b: "6,1",
      c: "1,2",
      d: "3,1",
    },
  },
  {
    id: "question20",
    text: `Q20) An articulation point, also known as a "separating vertex", is one whose removal increases the number of connected components in a graph. How many articulation points are in the graph shown? `,
    img: "/img/dsa_img1.png",
    options: {
      a: "1",
      b: "6",
      c: "2",
      d: "3",
    },
  },
  {
    id: "question21",
    text: `Q21) Find the number of strongly connected components in the graph below?`,
    img: "/img/dsa_img2.png",
    options: {
      a: "4",
      b: "6",
      c: "2",
      d: "3",
    },
  },
  {
    id: "question22",
    text: `Q22) Determine the time complexity of linear search in an array of size 'n'?`,
    options: {
      a: "O(1)",
      b: "O(log n)",
      c: "O(n)",
      d: "O(n^2)",
    },
  },
  {
    id: "question23",
    text: `Q23) What would happen if a function keeps calling itself infinitely?`,
    options: {
      a: "Heap Overflow",
      b: "Buffer Overflow",
      c: "Stack overflow",
      d: "Segmentation Fault",
    },
  },
  {
    id: "question24",
    text: `Q24) Select the data structure suitable for implementing a dictionary with key-value?`,
    options: {
      a: "Array",
      b: "Hash Table",
      c: "Stack",
      d: "Queue",
    },
  },
  {
    id: "question25",
    text: `Q25) What is the maximum number of keys in a B-tree of order 6 and of height 4?
In computer science, a B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. B Tree is a specialized m-way tree that is widely used for disk access.
    `,
    options: {
      a: "7776",
      b: "7775",
      c: "16384",
      d: "16383",
    },
  },
  {
    id: "question26",
    text: `Q26) A circular linked list can be used to implement?`,
    options: {
      a: "Stack",
      b: "Queue",
      c: "Both",
      d: "Neither",
    },
  },
  {
    id: "question27",
    text: "Q27) What is a subset?",
    options: {
      a: "A set that contains only elements found in another set, including possibly the empty set and the ______________",
      b: "A set that contains elements in the reverse order of another set",
      c: "A set that contains elements that are not in the original set",
      d: "A set that combines elements from two or more sets",
    },
  },
  {
    id: "question28",
    text: `
    Q28.What is the time complexity of the following function?

    function findElement(array, target){                   
      for (var i = 0; i < array.length; i++) {		
        if (array[i] == target) {				
	      return array[i];										
      }							
      }                                                    
    return null;
    }`,
    options: {
      a: "log(n)",
      b: "1",
      c: "n",
      d: "n^2",
      e: "n*log(n)",
    },
  },
  {
    id: "question29",
    text: "Q29) Which of the following types is not a value type in C?",
    options: {
      a: "float",
      b: "int",
      c: "string",
      d: "bool",
    },
  },
  {
    id: "question30",
    text: `Q30) What is the output for the code given below? Assume the main function returns 0.
    #include <stdio.h>
    int main() {					
	  int i;							
	  for(i = 0; i < -5; i--) {	
		printf("*");
	  }						
    }   `,
    options: {
      a: "*****",
      b: "Infinite Asterix",
      c: "*",
      d: "Nothing",
    },
  },
  {
    id: "question31",
    text: `Q31) What is the output of the code below?
    #include<stdio.h>
    int main()					
    {
      int a@ = 10;					
      printf("%d", a@);
      return 0;						
    }
  `,
    options: {
      a: "10@",
      b: "@",
      c: "10",
      d: "[Error] stray '@' in program",
    },
  },
  {
    id: "question32",
    text: "Q32) In which of the following scenarios can a C program be executed without a main() function?",
    options: {
      a: "When using inline assembly code",
      b: "When writing a script in C",
      c: "When using only preprocessor directives",
      d: "When using a different entry point specified by a linker script",
    },
  },
  {
    id: "question33",
    text: "Q33) Which of the following is true about FILE *fp?",
    options: {
      a: "FILE is a buffered stream",
      b: "FILE is a structure and fp is a pointer to the structure of FILE type",
      c: "FILE is a keyword in C for representing files and fp is a variable of FILE type.",
      d: "FILE is a stream"
    }
  },
  {
    id: "question34",
    text: "Q35) In a full binary tree if number of internal nodes is I, then number of leaves L are?",
    options: {
      a: "L = I-1",
      b: "L = I+1",
      c: "L = 2I",
      d: "L = 2I-1"
    }
  },
  {
    id: "question35",
    text: `Q35.What will be the output of the following program?

#include<stdio.h>			
void main()
{							
int var1=10;
	{					
	int var2 = 20; printf("%d %d", var1, var2);
	printf("%d %d", var1, var2);			
	}
printf("%d %d", var1, var2);
}
`,
    options: {
      a: "10 20 10 20",
      b: "Compile time error",
      c: "Run Time Error",
      d: "10 20 10 garbage"
    }
  },
  {
    id: "question36",
    text: "Q36) Consider the infix expression A-B*C + (D/E-F)*G. What is the correct postfix expression for this infix expression?",
    options: {
      a: "+-A*BC*-/DEFG",
      b: "ABC*-DE/F-G*+",
      c: "ABC*-DF/E-G*+",
      d: "+-A*CB*-/DFGE"
    }
  },
  {
    id: "question37",
    text: "Q37) A software application maintains a list of active network connections using a linked list. When a new connection is made, it is appended to the end of the list. If a user needs to check whether a specific connection is active, how long will this search typically take?",
    options: {
      a: "O(n)",
      b: "O(n^2)",
      c: "O(log n)",
      d: "O(1)"
    }
  },
  {
    id: "question38",
    text: "Q38) In an online gaming application, you need to keep track of the player's moves and their history. The player might need to undo or redo moves efficiently. Which data structure would be ideal for handling this requirement?",
    options: {
      a: "Queue",
      b: "Array",
      c: "Doubly Linked List",
      d: "Stack"
    }
  },
  {
    id: "question39",
    text: `Q39.The following C function takes a simply-linked list as input argument. It modifies the list by moving the last element to the front of the list and returns the modified list. Some part of the code is left blank. Choose the correct alternative to be added after the while loop.

typedef struct node				
{
   int value;					
   struct node *next;
}Node;							

Node *move_to_front(Node *head)			
{
   Node *p, *q;
   if((head == NULL: || (head->next == NULL))
      return head;
   q = NULL; p = head;
   while(->next != NULL)
   {
      q = p
      p = p->next;
   }
   /* ADD A STATEMENT HERE */
   return head;
}
`,
    options: {
      a: "q = NULL; p->next = head; head = p.",
      b: "q->next = NULL; p->next = head, head = p;",
      c: "head = p; p->next = q; q->next = NULL;",
      d: "q->next = NULL; head = p; p->next = head;"
    }
  },
  {
    id: "question40",
    text: "Q40) Convert the following infix expression to postfix expression - A / B ^ C + D * E - A * C",
    options: {
      a: "ABC/^DE*+AC*-",
      b: "ABC^/D*E+AC*-",
      c: "ABC^/DE*+A*C-",
      d: "ABC^/DE*+AC*-"
    }
  },
  {
    id: "question41",
    text: "Q41) Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?",
    options: {
      a: "if (x > 0) x++; else if (x < 0) x--;",
      b: "x++; x--;",
      c: "if (x > 0) x++; else x--;",
      d: "if (x == 0) x = 0; else x++; x--;"
    }
  },
  {
    id: "question42",
    text: `Q42.What happens when you execute the below code?

void main()						
{
for(; ;)				
for(; ;)
   printf("Hello..");				
}
`,
    options: {
      a: "Hello is printed one time",
      b: "Compilation Error",
      c: "Hello is printed infinite times",
      d: "Runtime Error"
    }
  },
  {
    id: "question43",
    text: "Q43) The following numbers are inserted into an empty binary search tree in the given order: 10, 1, 3, 5, 15, 12, 16. What is the height of the binary search tree?",
    options: {
      a: "6",
      b: "4",
      c: "5",
      d: "3"
    }
  },
  {
    id: "question44",
    text: "Q44) Which of the following is true about linked list implementation of stack?",
    options: {
      a: "None of the above",
      b: "Both of the above",
      c: "In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning.",
      d: "In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from end."
    }
  },
  {
    id: "question45",
    text: `Q45.In below program, what would you put in place of "?" to print "tax"?

#include <stdio.h>				
int main()
{							
   char arr[] = "Deltax";				
   printf("%s", ?);				
   return 0;
}						

`,
    options: {
      a: "Not possible",
      b: "arr",
      c: "(arr+4)",
      d: "(arr[4])"
    }
  },
  {
    id: "question46",
    text: `Q46.How many times loop will get executed?

#include<stdio.h>
int main()					
{
   int i = 0;					
   while(i <= 255)				
   {					
      printf("%d", i);					
      i++;			
   }
   return 0;
}`,
    options: {
      a: "1 Time",
      b: "255 Times",
      c: "256 Times",
      d: "Infinite Times"
    }
  },
  {
    id: "question47",
    text: `Q47.What is the output of the code given below?

#include <stdio.h>
int main() {					
   switch (20%13/2) {
      case 0:					
         printf("Case 0");		
      case 1:
         printf("Case 1");				
      case 2:				
         printf("Case 2");
      default:
	 printf("Default case");		
   }
   return 0;
}`,
    options: {
      a: "Case 2",
      b: "Case 1",
      c: "Case 0",
      d: "Default case"
    }
  },
  {
    id: "question48",
    text: "Q48) The average depth of a binary search tree is:",
    options: {
      a: "(n log n)",
      b: "(log n)",
      c: "(n^0.5)",
      d: "(n)"
    }
  },
  {
    id: "question49",
    text: "49) What will be the postfix expression for the following infix expression: (x + y) * (z - w) / v?",
    options: {
      a: "xy+zw-v/*v",
      b: "xy+zw-v/*",
      c: "xy+zw-*v/"
    }
  },
  {
    id: "question50",
    text: `Q50.what will be the output for the code given below?

#include <iostream>					
using namespace std;
int main () 
{					=
   int x, y;
   x = 2;
   y= ++x * ++x;				
   cout << x << y;
   x = 2;
   y=x++ * ++x;					
   cout << x << y;
   return 0;
}
`,
    options: {
      a: "41649",
      b: "49416",
      c: "41648",
      d: "412412"
    }
  },
  {
    id: "question51",
    text: "Q51) What is the job of Assembler in C programming?",
    options: {
      a: "It converts an assembly language program into machine language",
      b: "None of the above",
      c: "It converts source code into assembly code",
      d: "It converts code generated by Preprocessor to assembly code"
    }
  },
  {
    id: "question52",
    text: `Q52.What is the output of the code below?

class Main {					
   public static void main(String args[]) {
      try {					
         throw 18;
      }						
      catch(int e) {
         System.out.println("Got the Exception" + e);	
      }  
   }
}`,
    options: {
      a: "None of the above",
      b: "Compile error",
      c: "Program will crash",
      d: "Got the Exception 10"
    }
  },
  {
    id: "question53",
    text: "Q53) If you declare an array of 10 elements of type long, how much memory will it typically occupy?",
    options: {
      a: "32 bytes",
      b: "80 bytes",
      c: "160 bytes",
      d: "40 bytes"
    }
  },
  {
    id: "question54",
    text: "Q54) What is the meaning of the following statement? int *ptr[20];",
    options: {
      a: "None of the above",
      b: "Array of Integer Pointers of size 20",
      c: "Integer Array to Integer Pointers having size 20",
      d: "Integer Array of size 20 pointing to an Integer Pointer"
    }
  },
  {
    id: "question55",
    text: `Q55.What will be the output of the following C program?

#include <stdio.h>					
int main(){
   int i = 1, j = 2, k = 3;		
   printf("%d %d %d", i++, j++, ++k);
   printf("%d %d %d", ++i, j++, k++);			
   return 0;
}						
`,
    options: {
      a: "1 2 4 3 3 3",
      b: "1 2 3 3 3 4",
      c: "2 3 4 3 4 4",
      d: "1 2 4 3 4 4"
    }
  },
  {
    id: "question56",
    text: `Q56.What will be the output of the code given below?

#include<stdio.h>				
int x = 10;
int main()				
{
   int x = 0;					
   printf("%d",x);
   return 0;					
}
`,
    options: {
      a: "Compilation Error",
      b: "10",
      c: "0",
      d: "Undefined"
    }
  },
  {
    id: "question57",
    text: "Q57) What type of value does sizeof return?",
    options: {
      a: "unsigned int",
      b: "short",
      c: "char",
      d: "long"
    }
  },
  {
    id: "question58",
    text: `Q58. What will be the time complexity of the following pseudo code?

boolean TestFunction(int n){
    for(int x=0; x*x<=n; x++){
        if(n%x==0){
            return false;
        }
    }
    return true;
}
`,
    options: {
      a: "1",
      b: "N",
      c: "log N",
      d: "√n"
    }
  },

  {
    id: "question59",
    text: `Q59. Consider a hash table with hash function h(k) = k mod 10. It uses linear probing as collision resolution technique. Suppose the length of the table is 15 and 26, 22, 24, 32, 33, 23 are inserted in the empty table in the following manner:

key-value
2-22
3-33
4-24
5-32
6-26
7-23

What is the correct order in which the values could have been inserted?
`,
    options: {
      a: "22, 33, 32, 23, 26, 24",
      b: "32, 23, 22, 33, 26, 24",
      c: "26, 24, 22, 33, 32, 23",
      d: "22, 32, 26, 24, 23, 33"
    }
  },
  {
    id: "question60",
    text: `Q60. Which algorithm uses divide and conquer technique to sort elements in increasing or decreasing order?
`,
    options: {
      a: "Merge sort",
      b: "Quick sort",
      c: "Selection sort",
      d: "Both merge and quick sort"
    }
  },
  {
    id: "question61",
    text: `Q61. Assuming f(n) as a function that returns the factorial of a number n, if f(n) is implemented tail recursively and the compiler is capable of optimizing tail recursion, what would be the maximum depth of the call stack, at any given time, created by the call f(10)?
`,
    options: {
      a: "10",
      b: "11",
      c: "1",
      d: "2"
    }
  },
  {
    id: "question62",
    text: `Q62. What is the correct way to find a value in a complete binary search tree?
`,
    options: {
      a: "First compare the key with root node, if equal then return the root node. Else, if key is greater than the root node's key, recursive call for right subtree of tree node. And if key is lesser than the root node's key, recursive call for lesser subtree of tree node.",
      b: "First compare the key with root node, if equal then return the root node. Else, if key is lesser than the root node's key, recursive call for right subtree of tree node. And if key is greater than the root node's key, recursive call for lesser subtree of tree node.",
      c: "Traverse and compare all the keys one by one, starting from the left most node's key of the last level of the tree. If equal then return the node.",
      d: "Traverse and compare all the keys one by one, starting from the node's key. If equal then return the node."
    }
  },
  {
    id: "question63",
    text: `Q63. Stack is a distinct type of list where the operations are performed at one end of the stack.
Determine:
1) What is the principle under which stack operations take place?
2) Which method cannot be performed in stack?
`,
    options: {
      a: "1) Continuous allocation 2) Accessing the top element in stack",
      b: "1) Dynamic distribution 2) Removing an element from the stack",
      c: "1) Last in first out 2) Replace an element in stack",
      d: "1) First in first out 2) Insert an element in stack"
    }
  },
  {
    id: "question64",
    text: `Q64. Consider an array X[10]={24,2,9,3,7,8,22,16,12,10}. To sort the array in ascending order, quick sort divide and conquer algorithm has been used. The last element of the array is used as the pivot. Select the correct output of each pass of the algorithm.`,
    options: {
      a: `1 {2,9,3,7,8,10,22,12,16,24}
         2 {2,3,7,8,9,10,22,12,16,24}
         3 {2,3,7,8,9,10,12,16,22,24}
         4 {2,3,7,8,9,10,12,16,22,24}`,
      b: `1 {10,2,9,3,7,8,22,12,16,24}
        2 {24,2,3,7,8,9,10,22,12,16}
        3 {2,3,7,8,9,10,12,16,22,24}
        4 {2,3,7,8,9,10,12,16,22.24}`,
      c: `1 {2,9,3,7,8,22,12,16,24,10} 
        2 {2,3,7,8,9,22,12,16,24,10}
        3 {2,3,7,8,9,12,16,22,24,10)
        4 {2,3,7,8,9,10,12,16,22,24}`,
      d: `1 {2,3,7,8,9,10,22,12,16,24}
        2.{2,3,7,8,9,10,22,12,16,24}
        3 {2,3,7,8,9,10,12,16,22,24}
        4 {2,3,7,8,9,10,12,16,22,24}`
    }
  },
  {
    id: "question65",
    text: `Q65. Consider a tree of height 4. You need to delete a node from level 2. The node to be deleted has two children. Which approach should be used to delete it?`,
    options: {
      a: "Simply remove from the tree.",
      b: "Find inorder successor of the node. Copy contents of the inorder successor to the node and delete the inorder successor.",
      c: "Find postorder successor of the node. Copy contents of the postorder successor to the node and delete the postorder successor.",
      d: "Copy the child to the node and delete the child."
    }
  },
  {
    id: "question66",
    text: `Q66. In a program, the input of items is in a sorted array {8,7,5,4,2}. New numbers are coming randomly and getting added to the array such as the number 9 got added leading to - {8,7,54,2,9}. The new array is nearly sorted but the program needs the array to be in descending order completely. To reduce the time complexity of the algorithm, which sorting method should be used in this case?`,
    options: {
      a: "Bubble sort",
      b: "Insertion Sort",
      c: "Merge sort",
      d: "Bucket sort"
    }
  },
  {
    id: "question67",
    text: `Q67. What will be the output of the following program?

import java.util.*;
class Queue {
    public void insert (int queue[], int front, int rear, int item){
        if(front == -1 && rear == -1) {
            front = 0;
            rear = 0;
        }
        else {
            rear = rear +1;
        }
        queue[rear]=item;
    }
}
class Main {
    public static void main(String[] args) {
        int[] Nums = new int[5];
        Queue q = new Queue();
        q.insert(Nums,0,1,1);
        q.insert(Nums,1,2,3);
        q.insert(Nums,2,3,4);
        for(int i: Nums){
            System.out.println(i);
        }
    }
}
`,
    options: {
      a: "1 2 1 3 4",
      b: "0 0 1 2 4",
      c: "0 0 1 3 4",
      d: "1 2 3 4 1"
    }
  },
  {
    id: "question68",
    text: `Q68. The following code is used to create a heap from any provided array:

void buildHeap(int arr[], int n){
    int startIdx = (n/2)-1;
    for (int i = startIdx; i>= 10; i--) {
        heapify(arr, n, i);
    }
}
void heapify(int arr[], int n, int i){
    int largest = i; 
    int l = 2*i+1;
    int r = 2*i+2;
    if (l < n && arr[l] > arr[largest])
        largest = l;
    if (r < n && arr[r] > arr[largest])
        largest = r;
    if (largest != i) {
        int swap = arr[i]; 
        arr[i] = arr[largest];
        arr[largest] = swap;
        heapify(arr, n, largest);
    }
}

Which array will generate a heap as shown below after passing through this code?

                    97
                 .      .
                .         .
               53         59 
              .  .       .   .
             .    .     .     .
            26    41   58     31
`,
    options: {
      a: "26,41,53,97,31,58,59",
      b: "26,31,41,53,58,59,97",
      c: "97,53,59,26,41,58,31",
      d: "26,53,41,97,58,59,31"
    }
  },
  {
    id: "question69",
    text: `Q69. Choose the correct diagram from the given options that shows the Max Heap.


               ◯
    "to"    .        .  "add"
         .              .
       ◯                ◯ 
"p$" .    . "tal$"     .    .
   .       .      "$".        ."ition$"
 ◯         ◯     ◯          ◯


`,
    options: {
      a: `                  95
                     .      .
                    .         .
                   45         63 
                  .  .       .   .
                 .    .     .     .
                10    35   52     25
               .  .
              .    .
             15     4`,
      b: `                  63
                     .      .
                    .         .
                   45         95 
                  .  .       .   .
                 .    .     .     .
                52    35   25     4
               .  .
              .    .
             15     10`,
      c: `                  95
                     .      .
                    .         .
                   63         52 
                  .  .       .   .
                 .    .     .     .
                35    15   45     25
               .  .
              .    .
             10     4`,
      d: `                  63
                     .      .
                    .         .
                   45         95 
                  .  .       .   .
                 .    .     .     .
                52    35   15     10
               .  .
              .    .
             25     4`
    }
  }, {
    id: "question69",
    text: "Q69) Which option helps in creating a repetitive action?",
    options: {
      a: "Debugging",
      b: "Output",
      c: "Iterating",
      d: "Branching",
    },
  },
  {
    id: "question70",
    text: "Q70) While implementing functionality that contains logic with strings, you notice that your strings are all in one row. Hence, you need to work with a carriage return. Which escape sequence represents carriage return?",
    options: {
      a: "\\r",
      b: "n",
      c: "\\n\\r",
      d: "\\c",
    },
  },
  {
    id: "question71",
    text: `Q71) What will be the output of the following code snippet?
Line 0:public int getSum(int[] a){
Line 1: int result;
Line 2: for element in a
}
Line 3: result += a;
}
Line 4: return result;
}`,
    options: {
      a: "The sum of all given elements in the array",
      b: "A syntax error",
      c: "An error at line 1",
      d: "An error at line 4",
    },
  },
  {
    id: "question72",
    text: "Q72) Martin is creating a data structure and wants two stacks in one array. How should he design these stacks to work efficiently?",
    options: {
      a: "Stack 1 and Stack 2 elements should be pushed from the array's starting index. Another array should be created to identify the corresponding stack of that element.",
      b: "Stack 1 should be assigned to half of the array, and Stack 2 should be assigned to the other half. Hence, their work will be independent of each other.",
      c: "Stack 1 should start pushing the elements from the array's starting index and Stack 2 should start pushing the elements from the array's last index. Elements should be pushed into the array until they do not overlap.",
      d: "We cannot design a single array to work as two stacks.",
    },
  },
  {
    id: "question73",
    text: "Q73) John has a network flow graph where he has to analyse the shorter-length paths in the network. As the network is too dense, he decides to use some program by which the shortest path can be found. However, there are some edges with negative weights in the graph. Due to these edges, the algorithm cannot find the shortest path. What should John do to avoid this problem?",
    options: {
      a: "Use the Bellman-Ford algorithm.",
      b: "Use Dijkstra's algorithm.",
      c: "Use the Pruter code.",
      d: "Use Kirchhoff's theorem.",
    },
  },
  {
    id: "question74",
    text: `Q74) What will be the output of the following code snippet?
int a=5;
int b=1;
int c=0;
c=a++;
c+=b;
print("result =" + c)`,
    options: {
      a: "7",
      b: "Error",
      c: "6",
      d: "5",
    },
  },
  {
    id: "question75",
    text: "Q75) Using arrays is causing certain issues, so you decide to use an STL container 'vector'. What is the advantage of a vector against an array?",
    options: {
      a: "A vector is memory efficient, while an array occupies more memory than a vector.",
      b: "Vectors are index-based structures.",
      c: "Access time is constant in vectors.",
      d: "Vectors are more efficient in insert, delete and update operations than arrays.",
    },
  },
  {
    id: "question76",
    text: "Q76) Freida has given Alex a set of N-line segments and has asked him to find whether any of the two lines are intersecting or not. Which algorithm will Alex use to perform this operation?",
    options: {
      a: "Convex hull algorithm",
      b: "Sweep line algorithm",
      c: "Klee's algorithm",
      d: "Naive algorithm",
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
  question8: "d",
  question9: "a", // Assuming {10, 13, 9, 16, 15, 3, 9, 13} forms the max good pairs.
  question10: "d", // Binary (100 in base-3) conversion shows this output.
  question11: "d", // Selection sort fits as it places the largest first.
  question12: "b", // Stack produces 0011011 after binary conversion.
  question13: "a", // Tail recursion is when the recursive call is the last action.
  question14: "e", // Segmentation fault since strings in C are immutable.
  question15: "b", // After partition, 76 will be placed at the correct index.
  question16: "a", // (n + 1) / 2 is the average search time for sequential search.
  question17: "c", // Strategy forces opponent to lose using these conditions.
  question18: "c", // The code inserts a node at the end of the list.
  question19: "d", // Before the second multiplication, top and bottom are 3, 1.
  question20: "c", // Based on the given graph, there are two articulation points.
  question21: "a", // Four strongly connected components exist in the graph.
  question22: "c",
  question23: "c",
  question24: "b",
  question25: "b",
  question26: "c",
  question27: "a",
  question28: "c",
  question29: "c",
  question30: "d",
  question31: "d",
  question32: "d",
  question33: "c",
  question34: "b",
  question35: "b",
  question36: "b",
  question37: "a",
  question38: "d",
  question39: "Not known",
  question40: "a",
  question41: "a",
  question42: "c",
  question43: "d",
  question44: "a",
  question45: "not known",
  question46: "c",
  question47: "d",
  question48: "b",
  question49: "c",
  question50: "d",
  question51: "a",
  question52: "b",
  question53: "b",
  question54: "b",
  question55: "b",
  question56: "c",
  question57: "a",
  question58: "d",
  question59: "c",
  question60: "d",
  question61: "c",
  question62: "a",
  question63: "c",
  question64: "a",
  question65: "b",
  question66: "b",
  question67: "c",
  question68: "c",
  question69: "c",
  question70: "to be Found",
  question71: "to be Found",
  question72: "to be Found",
  question73: "to be Found",
  question74: "to be Found",
  question75: "to be Found",
  question76: "to be Found",
};
