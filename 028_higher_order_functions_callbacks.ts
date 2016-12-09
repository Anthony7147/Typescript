// callback function, passed inside another function
var dbQuery = function() : void {
	setTimeout(() => {
		console.log('Query results');
	}, 3000);
}
// higher order function
function loadPage(q : () => void) {
	console.log("Header");
	q();
	console.log("Sidebar");
	console.log("Footer");

}

loadPage(dbQuery);
