// fuctions have access to any public variables in other scope

// function nameFunction(name: string) : void {
	// 	var n : string = name;

// 	function printName() {
	// 		console.log(n);
// 	}

// 	printName();
// }

// nameFunction('Anthony');

//  * * *

//  The inner function maintain access to the outer scope After the values are returned!

// function nameFunction(name: string) {
// 	var n : string = name;

// 	return function() {
// 		console.log(n);
// 	}
// }

// var nameAgain = nameFunction('Nico');
// nameAgain();

// * * *

function lineup() {
	var nowBatting : number = 1;

	return {
		nextBatter() { nowBatting++ },
		currentBatter() { return nowBatting }
	}
}

let batters = lineup();

console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());

let pitchers = lineup();
console.log(pitchers.currentBatter());