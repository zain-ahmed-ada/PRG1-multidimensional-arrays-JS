/*
Start with a blank board
Ask player 1 for a row and column where they'd like to place their symbol.
Check if the space is empty
If empty, add the player's symbol and print out the board again..
Player 2 has their go..
If you are feeling adventurous, you can add code to check to see if a player has won!
*/

const readlineSync = require("readline-sync");

const board = [
	["", "", ""], // Row 1
	["", "", ""], // Row 2
	["", "", ""], // Row 3
];

const printBoard = () => {
	for (row of board) {
		console.log(row);
	}
};

const startGame = () => {
	gameEnd = false;
	while (gameEnd !== true) {
		let player = readlineSync.question("Enter Player (X or O): ");
		let row = readlineSync.question("Enter Row (0, 1, 2): ");
		let column = readlineSync.question("Enter Column (0, 1, 2): ");

		if (board[row][column] === "") {
			board[row][column] = player;
			console.log("");
			printBoard();
			console.log("");
		} else {
			console.log("Invalid move, try again.");
		}
		let userInput = readlineSync.question("End Game (yes or no)?: ");
		if (userInput === "yes") {
			gameEnd = true;
			console.log("");
			printBoard();
		} else if (userInput === "no") {
			gameEnd = false;
		} else {
			console.log("Enter a valid input.");
		}
	}
};

startGame();
