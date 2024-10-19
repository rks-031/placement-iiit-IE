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
img: "/img/coding1.png",

      options: {
      
      },
    },
    {
        id: "question2",
        text: ` Problem Statement
You're a pirate captain with a treasure map. The map shows islands connected by bridges, and each island has treasure.
You need to plan a treasure hunting trip with the following rules:
1 You can only visit one island at a time.
2 You can only travel between islands using the bridges.
3 Once you leave an island, you can't go back to it
4 Some islands might have more than one bridge connecting them.
Your task is to start at a specific island and end at another specific island, visiting other islands along the way. The gr to collect as much treasure as possible in the shortest amount of time.
Note: There are no cycles in the graph ( the graph is a DAG )

Input Format
The first line of input contains three space - separated integers N, M and K representing the number of islands, number of bridges, and the number of starting - ending island pairs respectively.
The second line contains N space - separated integers 1,2,...,71,72,..., TN representing the amount of treasure on each island.
The next M lines each contain three space - separated integers U, V and W representing a bridge between islands U and V with travel time W.
The next K lines each contain two space - separated integers S and E representing a starting island S and an ending island E.

Output Format
For each starting-ending pair, display two space-seperated integers which represent the maximum total amount of treasure that can be collected and the minimum travel time to collect that treasure

Sample TestCase 1:
TestCase Input:
5 6 1
10 20 30 40 50
1 2 5
1 3 10
2 4 10
3 4 5
4 5 1
2 5 2
1 5

TestCase Output:
130 16

Explanation:
(refer to diagram given below)
One possible path is 1 -> 3 -> 4 -> 5 The treasures collected are 10+30+40+50 = 130
and the travel time is 10 + 5 + 1 = 16

EDITOR
Language : C++

int main(){
/* Enter your code here read input from STDIN and print output to STDOUT*/
return 0;
}
`,
img: "/img/coding3.jpg",
        options: {
        
        },
      },
  ];
  
  export const correctAnswers = {
    question1: "not answered yet",
    question2: "not answered yet",
  };
  