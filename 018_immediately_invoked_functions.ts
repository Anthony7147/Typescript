var names : string[] = ['Anthony', 'Karina', 'Nico'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);