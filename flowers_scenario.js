const plants = [
	["Begonia", "Daisy", "Lily", "Peony", "Rose", "Sunflower", "Lavender"],
	[1, 6, 3, 4, 5, null, 2],
];

// Expected Output: Begonia -> Daisy -> Lavender -> Lily -> Peony -> Rose -> Sunflower
let pointer = 0;

while (plants[1][pointer] !== null) {
	if (plants[1][pointer] === plants[1][0]) {
		console.log(`${plants[0][pointer]} -> Pointer: ${pointer}`);
	}
	pointer = plants[1][pointer];
	console.log(`${plants[0][pointer]} -> Pointer: ${pointer}`);
}
