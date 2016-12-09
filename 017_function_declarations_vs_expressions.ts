console.log(fullName('Anthony', 'Knoll'));
// console.log(otherFullName('Anthony', 'Knoll'));
// console.log(thirdFullName('Anthony', 'Knoll'));



// Function declaration, hoisting
function fullName(first : string, last: string) : string {
	return first + " " + last;
}


// Function expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;
}
