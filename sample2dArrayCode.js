const tasks = ["a", "b", "c", "d"];

for (const letter of tasks) {
  console.log(letter);
}


const scores = [
  [78, 81, 84],
  [55, 54, 62],
  [89, 71, 90],
];

let tests = ["c", "b", "a"];
tests.sort();
console.log(tests);

console.log(scores.length);


for (const score of scores) {
  console.log(score);
}

for (const score of scores) {
  for (const element of score) {
    console.log(element);
  }
}


for (const score of scores) {
  console.log(score);
}

// Traditional `for` loop when index is needed
for (let i = 0; i < scores.length; i++) {
  for (let j = 0; j < scores[i].length; j++) {
    console.log(scores[i][j]);
  }
}

let max = 0;

scores.forEach((score) => {
  score.forEach((value) => {
    if (value > max) {
      max = value;
    }
  });
});
console.log(max);


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

console.log(calculateMaxValue(scores));







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
