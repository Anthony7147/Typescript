var realUser = {
	email: "test@test.com",
	firstName: 'Anthony',
	lastName: 'Knoll',
	sayHi() {
		return "Hey there!";
	}
};

console.log(realUser.email);
console.log(realUser.firstName);
console.log(realUser.lastName);
console.log(realUser.sayHi());