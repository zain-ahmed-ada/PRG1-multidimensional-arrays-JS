// This program demonstrates the use of 2D arrays in JavaScript

// A simple array of tasks (strings)
const tasks = ["a", "b", "c", "d"];

// Iterating through the tasks array using a for...of loop
for (const letter of tasks) {
  console.log(letter); 
}

// A 2D array representing scores for different tests
const scores = [
  [78, 81, 84], // Scores for student 1
  [55, 54, 62], // Scores for student 2
  [89, 71, 90], // Scores for student 3
];

// Another array of strings, demonstrating the sort() method
let tests = ["c", "b", "a"]; 
tests.sort(); // Sorts the tests array alphabetically
console.log(tests); // Output: ["a", "b", "c"]

// Getting the number of rows (students) in the scores array
console.log(scores.length); // Output: 3

// Iterating through the rows (each row is an array of scores)
for (const score of scores) {
  console.log(score); // Output: each student's scores array
}

// Nested loop to access individual elements (scores) in the 2D array
for (const score of scores) {
  for (const element of score) {
    console.log(element); // Output: each individual score
  }
}

// Another way to iterate through the rows
for (const score of scores) {
  console.log(score); // Output: each student's scores array
}

// Traditional for loop with index access to elements
for (let i = 0; i < scores.length; i++) { // Outer loop: iterates through rows
  for (let j = 0; j < scores[i].length; j++) { // Inner loop: iterates through columns
    console.log(scores[i][j]); // Accessing element at row i and column j
  }
}

// Finding the maximum value in the 2D array using forEach
let max = 0;
scores.forEach((score) => { // Iterate through each row
  score.forEach((value) => { // Iterate through each value in the row
    if (value > max) {
      max = value; 
    }
  });
});
console.log(max); // Output: 90


// Function to calculate the maximum value in a 2D array
function calculateMaxValue(data) {
  let max = 0;
  data.forEach((score) => {
    score.forEach((value) => {
      if (value > max) {
        max = value;
      }
    });
  });
  return max;
}

// Calling the function and printing the result
console.log(calculateMaxValue(scores)); // Output: 90

//To declare an empty multidimensional array, you use the same syntax as declaring one-dimensional array:
//let activities = [];

//defines a two-dimensional array named activities
// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];

//console.log(activities[3][1]); // 9

//to add a new element at the end of the multidimensional array, you use the push() method

//activities.push(['Study',2]);

//To insert an element in the middle of the array, you use the splice() method. The following inserts an element in the second position of the activities array:

//activities.splice(1, 0, ['Programming', 2]);

//This example calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.
// activities.forEach(activity => {
//     let percentage = ((activity[1] / 24) * 100).toFixed();
//     activity[2] = percentage + '%';
// });

// console.table(activities)

//To remove an element from an array, you use the pop() or splice() method. The following statement removes the last element of the activities array.

//activities.pop();

// You can remove the elements from the inner array of the multidimensional array by using the pop() method. The following example removes the percentage element from the inner arrays of the activities array.

// activities.forEach((activity) => {
//     activity.pop(2);
// });

//To iterate a multidimensional array, you use a nested for loop
// loop the outer array
// for (let i = 0; i < activities.length; i++) {
//     // get the size of the inner array
//     var innerArrayLength = activities[i].length;
//     // loop the inner array
//     for (let j = 0; j < innerArrayLength; j++) {
//         console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
//     }
// }

//Or you can use the forEach() method twice:
// activities.forEach((activity) => {
//     activity.forEach((data) => {
//         console.log(data);
//     });
// });

// console.table(activities);
