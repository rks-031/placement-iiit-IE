export const questions = [
  {
    id: "question1",
    text: `K-Means Clustering

In a k-means clustering problem, a dataset contains n data points, where ith data point is represented by the feature vector location[i]. The goal is to create k clusters, where the cluster centers or the cluster centroids can be placed at any point in the feature space. The overall quality of the clustering is measured by the maximum distance between any data point and its nearest cluster center.

The best possible quality is achieved by optimally placing the cluster centers to minimize this maximum distance. Determine this maximum distance between any data point and its nearest cluster center.

Note: The distance between two feature points x and y is defined as |x - y|, where |x| denotes the absolute value of x.

Function Description
Complete the function getMaximumDistance in the editor below.

getMaximumDistance takes the following parameters:

int location[n]: the feature locations of all the data points
int k: the number of clusters

Returns
int: the maximum distance between any data point and its nearest cluster center by optimally placing the k clusters

Constraints
1 ≤ n ≤ 10<sup>5</sup>
1 ≤ k ≤ n
1 ≤ location[i] ≤ 10<sup>9</sup>

Example
n = 5
location = [1,9,3,10,14]
k = 2

Explanation
Let the cluster centers be placed at points 3 and 12.

(refer to table attached below)

Hence, the maximum of all distances is equal to 3.
So output of function getMaximumDistance will be 3

EDITOR :
Language : C

#include <assert.h>

/*
 * Complete the 'getMaximumDistance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts the following parameters:
 *  1. INTEGER_ARRAY location
 *  2. INTEGER k
 */

int getMaximumDistance(int location_count, int* location, int k) {

}
Complete the above function
`,
    link: "https://leetcode.com/discuss/interview-question/5696760/K-Means-Clustering-By-Apple-India/",
    imgs: ["/img/coding1.png"],

    options: {

    },
  },
  {
    id: "question2",
    text: ``,
    imgs: ["/img/code/code1a.png", "/img/code/code1b.png", "/img/code/code1c.png", "/img/code/code1d.png"],
    options: {

    },
  },
  {
    id: "question3",
    text: `The Robbery Problem `,
    link: "https://studyx.ai/homework/101990246-the-robbery-problem-statement-there-exists-a-small-town-named-richieworld-and-its-people",
    options: {

    },
  },
  {
    id: "question4",
    text: `Intelligent SubString `,
    link: "https://www.geeksforgeeks.org/find-length-of-longest-substring-with-at-most-k-normal-characters/",
    options: {

    },
  },
  {
    id: "question4",
    text: ``,
    imgs: ["/img/code/code5a.png", "/img/code/code5b.png"],
    options: {

    },
  },
  {
    id: "question5",
    text: `Strings: Sort Every Word

Given a string S, sort every word in lexicographic order.

Function Description:
Implement the provided sortWords(...) method to print the string with each sorted word.

Input Format:
- First line: string S

Sample Input:
"hey welcome to the company"`,
    options: {}
  },
  {
    id: "question6",
    text: `Array Operations: Minimum Cost of the Wires

Given N wires of varying lengths in array A[i], make all wires of the same length with the minimum cost.

Function Description:
Implement minimumCost(...) to find the minimum cost of making the wire lengths equal.

Input Format:
- First line: integer N (number of wires)
- Second line: N space-separated integers A[i]

Sample Input:
5, 2 3 1 4 5`,
    options: {}
  },
  {
    id: "question7",
    text: `Searching Algorithms: Flowers Arrangement

Arrange K+1 flowers in unoccupied pots such that the distance between the red flower and the farthest blue flower is minimized.

Function Description:
Implement flowersArrangement(...) to find the minimal distance.

Input Format:
- First line: integers N and K
- Second line: binary string S

Sample Input:
7 2, 0100100`,
    options: {}
  },
  {
    id: "question8",
    text: `Searching Algorithm: Interesting Pizza

Given crust, cheese, and topping ingredients, determine the max number of pizzas Benjamin can make.

Function Description:
Implement countPizzas(...) to find the number of pizzas possible without/with spending money.

Input Format:
- First line: string S
- Second line: integers Nc, Nₛ, Nₜ
- Third line: integers Pc, Pₛ, Pₜ
- Fourth line: integer K

Sample Input:
CST, 2 3 5, 2 4 6, 100`,
    options: {}
  },
  {
    id: "question9",
    text: `Sorting: Find the Minimum Toll

Abby must visit N cities, each with a unique ID, with toll equal to |ID₂ - ID₁|. Find the minimum toll to complete all tasks.

Function Description:
Implement findMinToll(...) to find the minimum toll Abby must pay.

Input Format:
- First line: integer N
- Second line: N space-separated integers (city IDs)

Sample Input:
3, 1 2 4`,
    options: {}
  },
  {
    id: "question10",
    text: `Array Operation: Weird-Sum

Calculate the "weird sum" for each element in an array, defined as the sum of all other elements except itself.

Function Description:
Implement weirdSum(...) to find the "weird sum" of all array elements.

Input Format:
- First line: integer N (array size)
- Next N lines: space-separated integers

Sample Input:
4, 3 4 1 2`,
    options: {}
  }
];

export const correctAnswers = {
  question1: "not answered yet",
  question2: "not answered yet",
  question3: "not answered yet",
  question4: "not answered yet",
  question5: "not answered yet",
  question6: "not answered yet",
  question7: "not answered yet",
  question8: "not answered yet",
  question9: "not answered yet",
  question10: "not answered yet",
};