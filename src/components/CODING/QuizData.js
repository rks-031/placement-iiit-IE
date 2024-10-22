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
  ];
  
  export const correctAnswers = {
    question1: "not answered yet",
    question2: "not answered yet",
  };
  