const scores = [
	[78, 81, 84], // Scores for student 1
	[55, 54, 62], // Scores for student 2
	[89, 71, 90], // Scores for student 3
];

console.log(scores);

// Can you total the contents of a 2D array?

const totalOfArray = () => {
	let totalCount = 0;

	for (let i = 0; i < scores.length; i++) {
		for (let j = 0; j < scores[i].length; j++) {
			totalCount += scores[i][j];
		}
	}

	return totalCount;
};

console.log(`Total of Array: ${totalOfArray()}`);

// Can you calculate the average of a 2D array?

const averageOfArray = () => {
	let totalCount = 0;

	for (let i = 0; i < scores.length; i++) {
		for (let j = 0; j < scores[i].length; j++) {
			totalCount += scores[i][j];
		}
	}

	return totalCount / 9;
};

console.log(`Average of Array: ${averageOfArray()}`);

// Can you calculate the maximum value stored within a 2D array?

const maxOfArray = () => {
	let max = 0;

	for (let i = 0; i < scores.length; i++) {
		for (let j = 0; j < scores[i].length; j++) {
			if (scores[i][j] > max) {
				max = scores[i][j];
			}
		}
	}
	return max;
};

console.log(`Maximum value in Array: ${maxOfArray()}`);

// Can you calculate the minimum value stored in a 2D array?

const minOfArray = () => {
	let min = scores[0][0];

	for (let i = 0; i < scores.length; i++) {
		for (let j = 0; j < scores[i].length; j++) {
			if (scores[i][j] < min) {
				min = scores[i][j];
			}
		}
	}
	return min;
};

console.log(`Minimum value in Array: ${minOfArray()}`);
